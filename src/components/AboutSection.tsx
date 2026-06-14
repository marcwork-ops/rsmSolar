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
              title="Construction Excellence Meets Energy Independence"
            />
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8 }}>
              RSM Resilient Energy Solutions Inc. is redefining what is possible at the intersection
              of construction excellence and energy independence. The company delivers full-spectrum
              solutions from new residential and commercial construction to integrated solar and
              power systems.
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
                      Ignite structural and energy autonomy for every client by delivering value
                      through engineering mastery, strategic procurement, and construction
                      excellence.
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
                      To be a regional leader in integrated construction and solar EPC services while
                      accelerating the transition to a sustainable grid.
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
