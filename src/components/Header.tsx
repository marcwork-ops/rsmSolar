import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAV_ITEMS, SECTIONS, COMPANY_NAME, COLORS } from '../constants';
import { scrollToSection } from '../utils/scroll';
import RSMLogo from '../assets/RSM-Logo.jpg';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Add a subtle shadow once the user scrolls past the top.
  const elevated = useScrollTrigger({ disableHysteresis: true, threshold: 8 });

  const handleNavClick = (target: string) => {
    setMobileOpen(false);
    scrollToSection(target);
  };

  const Logo = (
    <Box
      sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
      onClick={() => handleNavClick(SECTIONS.home)}
    >
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
      <Box sx={{ lineHeight: 1 }}>
        <Typography sx={{ fontWeight: 800, fontSize: '1.05rem', color: 'primary.main' }}>
          RSM
        </Typography>
        <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary', letterSpacing: '0.04em' }}>
          RESILIENT ENERGY
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(10px)',
          color: 'text.primary',
          borderBottom: elevated ? `1px solid ${COLORS.lightGray}` : '1px solid transparent',
          boxShadow: elevated ? '0 6px 24px rgba(15,19,17,0.06)' : 'none',
          transition: 'all 0.25s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            {Logo}

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, mr: 2 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.target}
                  onClick={() => handleNavClick(item.target)}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Desktop CTA */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNavClick(SECTIONS.contact)}
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              Get My Free Quotation
            </Button>

            {/* Mobile menu button */}
            <IconButton
              edge="end"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 280, p: 2 } }}
      >
        <Box sx={{ mb: 2 }}>{Logo}</Box>
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.target} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.target)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => handleNavClick(SECTIONS.contact)}
        >
          Get My Free Quotation
        </Button>
        <Typography variant="caption" sx={{ display: 'block', mt: 3, color: 'text.secondary' }}>
          {COMPANY_NAME}
        </Typography>
      </Drawer>
    </>
  );
}
