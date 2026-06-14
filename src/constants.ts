// =============================================================
// Centralized constants: colors, navigation, calculator rates,
// and reusable content for the RSM landing page.
// =============================================================

/** Brand color palette: deep green, black, white, light gray, charcoal. */
export const COLORS = {
  green: '#0E7C46', // primary deep green
  greenDark: '#0A5C34',
  greenLight: '#2FA968',
  black: '#0F1311',
  charcoal: '#1C2421',
  gray: '#6B7770',
  lightGray: '#F4F6F5',
  white: '#FFFFFF',
} as const;

/** Section ids used for sticky-navbar smooth scrolling. */
export const SECTIONS = {
  home: 'home',
  calculator: 'calculator',
  epc: 'epc',
  solar: 'solar',
  about: 'about',
  contact: 'contact',
} as const;

/** Navbar links. `target` matches a section id above. */
export const NAV_ITEMS: { label: string; target: string }[] = [
  { label: 'Home', target: SECTIONS.home },
  { label: 'Calculator', target: SECTIONS.calculator },
  { label: 'EPC+', target: SECTIONS.epc },
  { label: 'Solar Systems', target: SECTIONS.solar },
  { label: 'About', target: SECTIONS.about },
  { label: 'Contact', target: SECTIONS.contact },
];

/** Calculator tuning values — adjust here to change estimates globally. */
export const CALCULATOR_RATES = {
  minSavingsRate: 0.3, // 30%
  maxSavingsRate: 0.6, // 60%
  monthsPerYear: 12,
  billPerKw: 1000, // PHP of monthly bill ≈ 1 kW
  minSystemKw: 3, // minimum recommended system size
} as const;

export const PROPERTY_TYPES = ['Residential', 'Commercial'] as const;
export const SYSTEM_TYPES = ['On-grid', 'Hybrid', 'Off-grid', 'Not sure'] as const;

/** Hero trust badges. */
export const TRUST_BADGES = [
  'EPC Contractor',
  'Solar + Construction Integration',
  'Permitting & Documentation',
  'Residential and Commercial Solutions',
];

/** "Zero Cash Out" financial loop cards. */
export const ZERO_CASH_OUT_CARDS = [
  {
    title: '₱0.00 Required Upfront Upgrade',
    body: 'Homeowners bypass capital expense hurdles by matching solar financing amortization directly with immediate energy savings.',
  },
  {
    title: 'Structured Equipment Loans',
    body: 'Clients can assume immediate physical control of their solar system with zero initial down-payment requirement under a structured solar equipment loan model.',
  },
  {
    title: 'Self-Funding Amortizations',
    body: 'Monthly amortization can be offset by reductions in monthly electricity bills, helping the system pay for itself over time.',
  },
  {
    title: 'Annualized Investor Return',
    body: 'The structure may provide underwriting partners a low-volatility annualized IRR target of 8.5% to 10.0%, depending on final agreement and project economics.',
  },
  {
    title: 'Asset Protection & Security',
    body: 'Systems are installed behind-the-meter on private properties, serving as physical asset backing for the funding structure.',
  },
];

/** EPC+ pillar cards. */
export const EPC_CARDS = [
  {
    title: 'Engineering',
    body: 'Precision design optimized for maximum performance and efficiency.',
  },
  {
    title: 'Procurement',
    body: 'Strategic sourcing ensures quality materials and competitive economics.',
  },
  {
    title: 'Construction',
    body: 'Flawless execution delivered on schedule and within budget.',
  },
  {
    title: 'Permitting',
    body: 'Complete regulatory compliance and documentation support.',
  },
];

/** Solar system type explanations. */
export const SOLAR_TYPES = [
  {
    title: 'On-Grid Solar',
    body: 'Connected to the utility grid. Best for reducing monthly electricity bills. It usually does not provide backup power during outages unless paired with batteries.',
  },
  {
    title: 'Hybrid Solar',
    body: 'Connected to the grid and includes batteries. Best for clients who want savings plus backup power during brownouts or outages.',
  },
  {
    title: 'Off-Grid Solar',
    body: 'Completely independent from the utility grid. Best for remote areas or properties without reliable grid access. It requires enough solar panels and batteries to power the property independently.',
  },
];

/** Solar recommendation chips. */
export const SOLAR_RECOMMENDATIONS = [
  { label: 'Best for savings', value: 'On-grid' },
  { label: 'Best for backup power', value: 'Hybrid' },
  { label: 'Best for remote areas', value: 'Off-grid' },
];

/** Core values cards. */
export const CORE_VALUES = [
  {
    title: 'Integrity',
    body: 'Transparency and accountability in every decision and project phase.',
  },
  {
    title: 'Reliability',
    body: 'Systems engineered for endurance, predictable generation, and lasting structural integrity.',
  },
  {
    title: 'Excellence',
    body: 'Robust, scalable power systems and construction delivered on time and within budget.',
  },
  {
    title: 'Innovation',
    body: 'Next-generation engineering and project management for client advantage.',
  },
];

/** Company contact details. */
export const CONTACT = {
  phones: ['+63 917 625 5906', '+63 916 300 1896'],
  // website: 'www.rsmenergy.com',
  email: 'admin.rsmenergy@gmail.com',
  address:
    '21st Floor Park Triangle Tower, 32nd Street cor. 11th Avenue, BGC, Fort Bonifacio, Taguig City, 1635',
};

export const COMPANY_NAME = 'RSM Resilient Energy Solutions';
export const COMPANY_TAGLINE = 'The Future Is Built Within.';
