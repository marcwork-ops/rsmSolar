import { Box, Container, Grid, Typography, Button, Card, Stack } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { COLORS, SECTIONS, TRUST_BADGES } from '../constants';
import { scrollToSection } from '../utils/scroll';

export default function HeroSection() {
  return (
    <Box
      id={SECTIONS.home}
      sx={{
        position: 'relative',
        color: 'white',
        // Dark charcoal → green gradient with a grayscale building/solar backdrop.
        backgroundImage: `linear-gradient(115deg, rgba(15,19,17,0.92) 0%, rgba(10,92,52,0.85) 100%), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'saturate(0.9)',
        pt: { xs: 10, md: 14 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                display: 'inline-block',
                px: 2,
                py: 0.75,
                mb: 3,
                borderRadius: 999,
                bgcolor: 'rgba(47,169,104,0.18)',
                border: `1px solid ${COLORS.greenLight}`,
                color: COLORS.greenLight,
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
              }}
            >
              EPC CONTRACTOR · CONSTRUCTION + SOLAR + POWER
            </Typography>

            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.2rem', sm: '3rem', md: '3.6rem' }, mb: 3 }}
            >
              Powering Resilient Homes and Businesses with Solar EPC Solutions
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.82)',
                fontSize: { xs: '1rem', md: '1.18rem' },
                lineHeight: 1.7,
                maxWidth: 620,
                mb: 4,
              }}
            >
              RSM Resilient Energy Solutions is an EPC contractor delivering integrated
              construction, solar, and power systems for clients seeking energy independence,
              reliability, and long-term savings.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={() => scrollToSection(SECTIONS.contact)}
              >
                Get My Free Quotation
              </Button>
              <Button
                size="large"
                variant="outlined"
                onClick={() => scrollToSection(SECTIONS.calculator)}
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.5)',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.08)' },
                }}
              >
                See Estimated Savings
              </Button>
            </Stack>
          </Grid>

          {/* Trust badge cards */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              {TRUST_BADGES.map((badge) => (
                <Grid item xs={6} key={badge}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      boxShadow: 'none',
                      backdropFilter: 'blur(6px)',
                      p: 2.5,
                      '&:hover': { boxShadow: 'none', transform: 'translateY(-4px)' },
                    }}
                  >
                    <VerifiedIcon sx={{ color: COLORS.greenLight, mb: 1 }} />
                    <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>
                      {badge}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
