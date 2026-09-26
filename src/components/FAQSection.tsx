import { Box, Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQS } from '../constants';
import SectionHeading from './SectionHeading';

export default function FAQSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="md">
        <SectionHeading eyebrow="FAQ" title="Common Questions" />

        {FAQS.map((faq) => (
          <Accordion
            key={faq.q}
            disableGutters
            elevation={0}
            sx={{
              mb: 1.5,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 3, py: 0.5 }}>
              <Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
