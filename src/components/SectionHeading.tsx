import { Box, Typography } from '@mui/material';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean; // use light text on dark backgrounds
}

/** Reusable section heading: small green eyebrow + bold title + optional description. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: align === 'center' ? 720 : 'none',
        mx: align === 'center' ? 'auto' : 0,
        mb: { xs: 4, md: 6 },
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            color: light ? 'primary.light' : 'primary.main',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            mb: 1.5,
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h3"
        sx={{
          color: light ? 'white' : 'text.primary',
          fontSize: { xs: '1.8rem', md: '2.4rem' },
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          sx={{
            mt: 2,
            color: light ? 'rgba(255,255,255,0.78)' : 'text.secondary',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
