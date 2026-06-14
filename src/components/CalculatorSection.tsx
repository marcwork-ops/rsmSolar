import { useMemo, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
  Alert,
} from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  CALCULATOR_RATES,
  PROPERTY_TYPES,
  SYSTEM_TYPES,
  SECTIONS,
  COLORS,
} from '../constants';
import { scrollToSection } from '../utils/scroll';
import SectionHeading from './SectionHeading';

/** Format a number as Philippine Peso. */
const formatPHP = (value: number): string =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(value);

interface Estimate {
  monthlyLow: number;
  monthlyHigh: number;
  annualLow: number;
  annualHigh: number;
  systemKw: number;
}

export default function CalculatorSection() {
  const [bill, setBill] = useState('');
  const [propertyType, setPropertyType] = useState<string>(PROPERTY_TYPES[0]);
  const [systemType, setSystemType] = useState<string>(SYSTEM_TYPES[0]);

  // Derive the estimate from inputs. Returns null until a valid bill is entered.
  const estimate = useMemo<Estimate | null>(() => {
    const amount = parseFloat(bill);
    if (!amount || amount <= 0) return null;

    const { minSavingsRate, maxSavingsRate, monthsPerYear, billPerKw, minSystemKw } =
      CALCULATOR_RATES;

    const monthlyLow = amount * minSavingsRate;
    const monthlyHigh = amount * maxSavingsRate;

    // Suggested system size: bill / 1000 kW, never below the minimum, 1 decimal place.
    const rawKw = amount / billPerKw;
    const systemKw = Math.round(Math.max(rawKw, minSystemKw) * 10) / 10;

    return {
      monthlyLow,
      monthlyHigh,
      annualLow: monthlyLow * monthsPerYear,
      annualHigh: monthlyHigh * monthsPerYear,
      systemKw,
    };
  }, [bill]);

  return (
    <Box id={SECTIONS.calculator} sx={{ bgcolor: COLORS.lightGray, py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Solar Savings Calculator"
          title="Estimate Your Solar Savings"
          description="Enter your average monthly electricity bill to get a quick estimate of your possible solar savings and recommended system size."
        />

        <Grid container spacing={4}>
          {/* Inputs */}
          <Grid item xs={12} md={5}>
            <Card sx={{ '&:hover': { transform: 'none' } }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Your details
                </Typography>

                <TextField
                  fullWidth
                  label="Average monthly electricity bill"
                  type="number"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  placeholder="e.g. 8000"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                  }}
                  sx={{ mb: 3 }}
                />

                <TextField
                  select
                  fullWidth
                  label="Property type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  sx={{ mb: 3 }}
                >
                  {PROPERTY_TYPES.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  fullWidth
                  label="System type preference"
                  value={systemType}
                  onChange={(e) => setSystemType(e.target.value)}
                >
                  {SYSTEM_TYPES.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </CardContent>
            </Card>
          </Grid>

          {/* Outputs */}
          <Grid item xs={12} md={7}>
            {estimate ? (
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <ResultCard
                    icon={<SavingsIcon />}
                    label="Estimated monthly savings"
                    value={`${formatPHP(estimate.monthlyLow)} – ${formatPHP(estimate.monthlyHigh)}`}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ResultCard
                    icon={<CalendarMonthIcon />}
                    label="Estimated annual savings"
                    value={`${formatPHP(estimate.annualLow)} – ${formatPHP(estimate.annualHigh)}`}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ResultCard
                    icon={<SolarPowerIcon />}
                    label="Suggested solar system size"
                    value={`≈ ${estimate.systemKw} kW`}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': { boxShadow: '0 16px 40px rgba(14,124,70,0.3)' },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography sx={{ fontWeight: 600, mb: 1 }}>Recommended next step</Typography>
                      <Typography sx={{ fontSize: '0.9rem', opacity: 0.85, mb: 2 }}>
                        Lock in a tailored design and accurate pricing.
                      </Typography>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => scrollToSection(SECTIONS.contact)}
                        sx={{
                          bgcolor: 'white',
                          color: 'primary.main',
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                        }}
                      >
                        Request a free quotation
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12}>
                  <Alert severity="info" sx={{ borderRadius: 3 }}>
                    This is only a rough estimate. Final savings and system size depend on site
                    inspection, roof condition, usage pattern, utility rate, system design, and
                    equipment selection.
                  </Alert>
                </Grid>
              </Grid>
            ) : (
              <Card
                sx={{
                  height: '100%',
                  display: 'grid',
                  placeItems: 'center',
                  minHeight: 280,
                  '&:hover': { transform: 'none' },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <SolarPowerIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1.5 }} />
                  <Typography variant="h6">Enter your monthly bill</Typography>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Your estimated savings and recommended system size will appear here.
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

/** Small presentational card for a single estimate result. */
function ResultCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2,
            display: 'grid',
            placeItems: 'center',
            bgcolor: 'rgba(14,124,70,0.1)',
            color: 'primary.main',
            mb: 2,
          }}
        >
          {icon}
        </Box>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 0.5 }}>
          {label}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem' }}>{value}</Typography>
      </CardContent>
    </Card>
  );
}
