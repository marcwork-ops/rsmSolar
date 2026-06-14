import { Box, Container, Grid, Card, CardContent, Typography, Alert } from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import { ZERO_CASH_OUT_CARDS, COLORS } from '../constants';
import SectionHeading from './SectionHeading';

export default function ZeroCashOutSection() {
  return (
    <Box
      sx={{
        bgcolor: COLORS.black,
        color: 'white',
        py: { xs: 7, md: 11 },
        backgroundImage: `radial-gradient(circle at 20% 0%, rgba(14,124,70,0.25) 0%, transparent 45%)`,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          light
          eyebrow="Financing"
          title="The “Zero Cash Out” Financial Loop"
          description="Start your solar upgrade with ₱0 required upfront capital through a structured solar financing approach designed to match amortization with energy savings."
        />

        <Grid container spacing={3}>
          {ZERO_CASH_OUT_CARDS.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.title}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: COLORS.charcoal,
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: 'none',
                  '&:hover': { boxShadow: '0 16px 40px rgba(14,124,70,0.25)' },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(47,169,104,0.18)',
                      color: COLORS.greenLight,
                      mb: 2,
                    }}
                  >
                    <PaymentsIcon />
                  </Box>
                  <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                    {card.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Alert
          severity="warning"
          icon={false}
          sx={{
            mt: 4,
            borderRadius: 3,
            bgcolor: 'rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.75)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          Financing terms, investor returns, and eligibility are subject to final assessment,
          contract terms, and underwriting approval.
        </Alert>
      </Container>
    </Box>
  );
}
