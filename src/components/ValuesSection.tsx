import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ShieldIcon from '@mui/icons-material/Shield';
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { CORE_VALUES, COLORS } from '../constants';
import SectionHeading from './SectionHeading';

const ICONS = [<HandshakeIcon />, <ShieldIcon />, <StarIcon />, <LightbulbIcon />];

export default function ValuesSection() {
  return (
    <Box sx={{ bgcolor: COLORS.charcoal, color: 'white', py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading light eyebrow="What Drives Us" title="Our Core Values" />

        <Grid container spacing={3}>
          {CORE_VALUES.map((value, i) => (
            <Grid item xs={12} sm={6} md={3} key={value.title}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: 'none',
                  '&:hover': { boxShadow: '0 16px 40px rgba(14,124,70,0.22)' },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(47,169,104,0.18)',
                      color: COLORS.greenLight,
                      mb: 2.5,
                    }}
                  >
                    {ICONS[i]}
                  </Box>
                  <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>
                    {value.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                    {value.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
