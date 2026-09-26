import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { EPC_CARDS, PROCESS_STEPS, SECTIONS } from '../constants';
import SectionHeading from './SectionHeading';

// Map each EPC pillar to an icon (kept here so constants stay data-only).
const ICONS = [
  <EngineeringIcon />,
  <ShoppingCartCheckoutIcon />,
  <ConstructionIcon />,
  <AssignmentTurnedInIcon />,
];

export default function EPCSection() {
  return (
    <Box id={SECTIONS.epc} sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="How We Work"
          title="One Team from Start to Finish"
          description="No juggling separate designers, suppliers, installers, and permit runners. We handle all of it, so there is one team to call if anything comes up."
        />

        <Grid container spacing={3}>
          {EPC_CARDS.map((card, i) => (
            <Grid item xs={12} sm={6} md={3} key={card.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(14,124,70,0.1)',
                      color: 'primary.main',
                      mb: 2.5,
                    }}
                  >
                    {ICONS[i]}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                    {card.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* What happens next */}
        <Typography variant="h6" sx={{ textAlign: 'center', mt: { xs: 6, md: 8 }, mb: 3 }}>
          What happens after you request a quote
        </Typography>
        <Grid container spacing={3}>
          {PROCESS_STEPS.map((step, i) => (
            <Grid item xs={12} sm={6} md={3} key={step.title}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    flexShrink: 0,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, mb: 0.5 }}>{step.title}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {step.body}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
