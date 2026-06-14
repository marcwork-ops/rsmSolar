import { createTheme } from '@mui/material/styles';
import { COLORS } from './constants';

// =============================================================
// MUI theme customization — establishes the premium, clean,
// green/charcoal brand identity across all components.
// =============================================================
export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.green,
      dark: COLORS.greenDark,
      light: COLORS.greenLight,
      contrastText: COLORS.white,
    },
    secondary: {
      main: COLORS.charcoal,
      contrastText: COLORS.white,
    },
    background: {
      default: COLORS.white,
      paper: COLORS.white,
    },
    text: {
      primary: COLORS.black,
      secondary: COLORS.gray,
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.01em' },
    h3: { fontWeight: 700, lineHeight: 1.2 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: `1px solid ${COLORS.lightGray}`,
          boxShadow: '0 8px 30px rgba(15, 19, 17, 0.05)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 16px 40px rgba(14, 124, 70, 0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
  },
});
