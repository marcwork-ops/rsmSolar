import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { EPC_CARDS, SECTIONS } from '../constants';
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
          eyebrow="Single-Source Accountability"
          title="Why EPC+ Matters"
          description="Traditional construction fragments responsibility. RSM eliminates that risk through an integrated Engineering, Procurement, Construction, Permitting, and Documentation model. One team. One goal. Single-source accountability from start to finish."
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
      </Container>
    </Box>
  );
}
