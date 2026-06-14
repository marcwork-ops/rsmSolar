import { Box } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CalculatorSection from './components/CalculatorSection';
import ZeroCashOutSection from './components/ZeroCashOutSection';
import EPCSection from './components/EPCSection';
import SolarTypesSection from './components/SolarTypesSection';
import AboutSection from './components/AboutSection';
import ValuesSection from './components/ValuesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Header />
      <main>
        <HeroSection />
        <CalculatorSection />
        <ZeroCashOutSection />
        <EPCSection />
        <SolarTypesSection />
        <AboutSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </Box>
  );
}
