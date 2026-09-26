import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { SECTIONS, COLORS } from '../constants';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <Box id={SECTIONS.about} sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <SectionHeading
              align="left"
              eyebrow="About RSM"
              title="Solar and Construction, Under One Roof"
            />
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8 }}>
              RSM Resilient Energy Solutions is a construction and solar company based in BGC,
              Taguig. Because we do both, we can handle the roof and structural work a solar
              installation needs, not just the panels. We build for homes and businesses,
              from new construction to adding solar to an existing property.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ borderLeft: `4px solid ${COLORS.green}` }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <FlagIcon color="primary" />
                      <Typography variant="h6">Our Mission</Typography>
                    </Box>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                      Help Filipino homes and businesses lower their power costs and stay powered
                      through brownouts, with systems that are designed and built properly.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ borderLeft: `4px solid ${COLORS.green}` }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <VisibilityIcon color="primary" />
                      <Typography variant="h6">Our Vision</Typography>
                    </Box>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                      To become a trusted name in solar and construction across the region, and to
                      help move the country toward cleaner, more reliable power.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
