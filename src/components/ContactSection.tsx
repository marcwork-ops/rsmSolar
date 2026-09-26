import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  COLORS,
  CONTACT,
  PROPERTY_TYPES,
  SECTIONS,
  SYSTEM_TYPES,
} from '../constants';
import SectionHeading from './SectionHeading';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  bill: string;
  propertyType: string;
  systemType: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  bill: '',
  propertyType: PROPERTY_TYPES[0],
  systemType: SYSTEM_TYPES[0],
  message: '',
};

const ENDPOINT = import.meta.env.VITE_QUOTATION_ENDPOINT;

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [snack, setSnack] = useState<{ severity: 'success' | 'error'; message: string } | null>(
    null,
  );

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      if (!ENDPOINT) throw new Error('Missing VITE_QUOTATION_ENDPOINT');

      // Send as text/plain so the request stays a "simple" CORS request and
      // skips the preflight that Apps Script web apps don't answer. The script
      // still reads the raw body via e.postData.contents.
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.result !== 'success') throw new Error(data.error || 'Submission failed');

      setSnack({
        severity: 'success',
        message:
          'Thank you! We received your request and will contact you within 1 business day to schedule your free site visit.',
      });
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error('Quotation submission failed:', err);
      setSnack({
        severity: 'error',
        message:
          'Sorry, your request did not go through. Please try again, or call or email us using the details on this page.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box id={SECTIONS.contact} sx={{ bgcolor: COLORS.lightGray, py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Free Quotation"
          title="Get My Free Quotation"
          description="Tell us a little about your property. We will schedule a free site visit, then send you a system design and an itemized quote."
        />

        <Grid container spacing={4}>
          {/* Lead form */}
          <Grid item xs={12} md={7}>
            <Card sx={{ '&:hover': { transform: 'none' } }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Full name"
                        value={form.fullName}
                        onChange={handleChange('fullName')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        type="email"
                        label="Email"
                        value={form.email}
                        onChange={handleChange('email')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Phone number"
                        value={form.phone}
                        onChange={handleChange('phone')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="City / Municipality"
                        value={form.location}
                        onChange={handleChange('location')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type="number"
                        label="Average monthly electric bill (₱)"
                        value={form.bill}
                        onChange={handleChange('bill')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        label="Property type"
                        value={form.propertyType}
                        onChange={handleChange('propertyType')}
                      >
                        {PROPERTY_TYPES.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Preferred system type"
                        value={form.systemType}
                        onChange={handleChange('systemType')}
                      >
                        {SYSTEM_TYPES.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Anything else we should know?"
                        placeholder="e.g. roof type, how often you get brownouts, planned aircon or EV"
                        value={form.message}
                        onChange={handleChange('message')}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                        disabled={submitting}
                      >
                        {submitting ? 'Sending…' : 'Send My Free Quote Request'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact details */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                height: '100%',
                bgcolor: COLORS.black,
                color: 'white',
                '&:hover': { transform: 'none' },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                  Contact Information
                </Typography>
                <Stack spacing={3}>
                  <ContactItem icon={<PhoneIcon />} label="Phone">
                    {CONTACT.phones.join(' / ')}
                  </ContactItem>
                  {/* <ContactItem icon={<LanguageIcon />} label="Website">
                    {CONTACT.website}
                  </ContactItem> */}
                  <ContactItem icon={<EmailIcon />} label="Email">
                    {CONTACT.email}
                  </ContactItem>
                  <ContactItem icon={<PlaceIcon />} label="Address">
                    {CONTACT.address}
                  </ContactItem>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snack !== null}
        autoHideDuration={6000}
        onClose={() => setSnack(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnack(null)}
          severity={snack?.severity ?? 'success'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snack?.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

/** A single contact detail row with an icon. */
function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box
        sx={{
          width: 42,
          height: 42,
          flexShrink: 0,
          borderRadius: 2,
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(47,169,104,0.18)',
          color: COLORS.greenLight,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', mb: 0.25 }}>
          {label}
        </Typography>
        <Typography sx={{ color: 'white', lineHeight: 1.5 }}>{children}</Typography>
      </Box>
    </Box>
  );
}
