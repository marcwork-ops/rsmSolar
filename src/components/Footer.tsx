import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import {
  NAV_ITEMS,
  CONTACT,
  COMPANY_NAME,
  COMPANY_TAGLINE,
  COLORS,
} from '../constants';
import { scrollToSection } from '../utils/scroll';
import RSMLogo from '../assets/RSM-Logo.jpg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: COLORS.black, color: 'rgba(255,255,255,0.7)', pt: 7 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 2 }}>
              <Box
                component="img"
                src={RSMLogo}
                alt={`${COMPANY_NAME} logo`}
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: 2,
                  objectFit: 'cover',
                }}
              />
              <Typography sx={{ color: 'white', fontWeight: 800 }}>{COMPANY_NAME}</Typography>
            </Box>
            <Typography sx={{ color: COLORS.greenLight, fontWeight: 700, fontSize: '1.1rem', mb: 1.5 }}>
              {COMPANY_TAGLINE}
            </Typography>
            <Typography sx={{ lineHeight: 1.7, maxWidth: 380 }}>
              An EPC contractor delivering integrated construction, solar, and power systems for
              energy independence and long-term savings.
            </Typography>
          </Grid>

          {/* Quick links */}
          <Grid item xs={6} md={3}>
            <Typography sx={{ color: 'white', fontWeight: 700, mb: 2 }}>Quick Links</Typography>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.target}
                component="button"
                onClick={() => scrollToSection(item.target)}
                underline="none"
                sx={{
                  display: 'block',
                  mb: 1.25,
                  color: 'rgba(255,255,255,0.7)',
                  textAlign: 'left',
                  '&:hover': { color: COLORS.greenLight },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Grid>

          {/* Contact */}
          <Grid item xs={6} md={4}>
            <Typography sx={{ color: 'white', fontWeight: 700, mb: 2 }}>Contact</Typography>
            <Typography sx={{ mb: 1.25, lineHeight: 1.6 }}>{CONTACT.phones.join(' / ')}</Typography>
            <Typography sx={{ mb: 1.25 }}>{CONTACT.email}</Typography>
            {/* <Typography sx={{ mb: 1.25 }}>{CONTACT.website}</Typography> */}
            <Typography sx={{ lineHeight: 1.6 }}>{CONTACT.address}</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.12)' }} />

        <Typography sx={{ textAlign: 'center', pb: 3, fontSize: '0.85rem' }}>
          © {year} {COMPANY_NAME}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
