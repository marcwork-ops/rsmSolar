import { Box, Container, Grid, Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import { SOLAR_TYPES, SOLAR_RECOMMENDATIONS, SECTIONS, COLORS } from '../constants';
import SectionHeading from './SectionHeading';

const ICONS = [<GridViewIcon />, <BatteryChargingFullIcon />, <OfflineBoltIcon />];

export default function SolarTypesSection() {
  return (
    <Box id={SECTIONS.solar} sx={{ bgcolor: COLORS.lightGray, py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Solar System Types"
          title="Choose the Right Solar System"
          description="Each system suits a different goal. Here is a concise breakdown to help you decide what fits your property and priorities."
        />

        <Grid container spacing={3}>
          {SOLAR_TYPES.map((type, i) => (
            <Grid item xs={12} md={4} key={type.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                      mb: 2.5,
                    }}
                  >
                    {ICONS[i]}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {type.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {type.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recommendation chips */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 5 }}
        >
          {SOLAR_RECOMMENDATIONS.map((rec) => (
            <Card
              key={rec.label}
              sx={{ px: 3, py: 2, textAlign: 'center', '&:hover': { transform: 'none' } }}
            >
              <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 1 }}>
                {rec.label}
              </Typography>
              <Chip label={rec.value} color="primary" sx={{ fontWeight: 700 }} />
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
