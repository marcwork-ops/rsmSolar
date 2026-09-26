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
  { label: 'How We Work', target: SECTIONS.epc },
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

/** Hero trust badges — offer facts only; swap in proof (installs, licenses) once available. */
export const TRUST_BADGES = [
  '₱0 Upfront Financing Available',
  'Permits & Paperwork Handled',
  'One Team, Site Visit to Switch-On',
  'Homes and Businesses',
];

/** "Zero Cash Out" financing cards (homeowner-facing only). */
export const ZERO_CASH_OUT_CARDS = [
  {
    title: '₱0 Upfront',
    body: 'Start without a big payment. Your solar system is financed, so there is no down payment to get it installed.',
  },
  {
    title: 'Yours to Use from Day One',
    body: 'The system is installed and running on your property right away while you pay it off monthly.',
  },
  {
    title: 'Paid from Your Savings',
    body: 'Your monthly payment is designed to be offset by the drop in your electric bill, so the system helps pay for itself over time.',
  },
];

/** "How We Work" pillar cards. */
export const EPC_CARDS = [
  {
    title: 'Design',
    body: 'We size and design your system around your roof, your usage, and your budget.',
  },
  {
    title: 'Equipment',
    body: 'We source the panels, inverters, and batteries, so you do not have to compare suppliers.',
  },
  {
    title: 'Installation',
    body: 'We build and install the system, including any roof or structural work.',
  },
  {
    title: 'Permits & Paperwork',
    body: 'We handle the permits and utility documents needed to switch your system on.',
  },
];

/** "What happens next" steps shown under the How We Work cards. */
export const PROCESS_STEPS = [
  { title: 'Free site visit', body: 'We check your roof, wiring, and electric bills.' },
  { title: 'Design & quote', body: 'You get a system design and an itemized price.' },
  { title: 'Permits & install', body: 'We file the paperwork and install the system.' },
  { title: 'Switch on', body: 'We test everything and walk you through it.' },
];

/** Solar system type explanations. */
export const SOLAR_TYPES = [
  {
    title: 'On-Grid Solar',
    body: 'Connected to the utility grid. The lowest-cost way to cut your monthly bill. It does not keep your power on during brownouts.',
  },
  {
    title: 'Hybrid Solar',
    body: 'Connected to the grid, with batteries. Cuts your bill and keeps essential power on during brownouts.',
  },
  {
    title: 'Off-Grid Solar',
    body: 'Runs fully on its own panels and batteries, with no grid connection. Best for remote properties without reliable power.',
  },
];

/** Solar recommendation chips. */
export const SOLAR_RECOMMENDATIONS = [
  { label: 'Best for savings', value: 'On-grid' },
  { label: 'Best for brownout backup', value: 'Hybrid' },
  { label: 'Best for remote areas', value: 'Off-grid' },
];

/** Core values cards. */
export const CORE_VALUES = [
  {
    title: 'Integrity',
    body: 'Clear quotes and straight answers, including when solar is not the right fit for you.',
  },
  {
    title: 'Reliability',
    body: 'Systems designed for Philippine weather and built to keep producing for years.',
  },
  {
    title: 'Excellence',
    body: 'Careful work on every job, whether it is a home rooftop or a commercial building.',
  },
  {
    title: 'Innovation',
    body: 'We keep up with new panel, battery, and inverter technology so you do not have to.',
  },
];

/** Frequently asked questions. */
export const FAQS = [
  {
    q: 'How much does a solar system cost?',
    a: 'It depends on your electricity use, roof, and the type of system you choose. Use the calculator above for a rough size, then request a free quote for an itemized price. Financing with ₱0 upfront is also available, subject to approval.',
  },
  {
    q: 'Will solar keep my power on during brownouts?',
    a: 'Only if the system has batteries. An on-grid system shuts off during a grid outage for safety. A hybrid or off-grid system with batteries keeps your power running.',
  },
  {
    q: 'What is net metering?',
    a: 'Net metering lets you send extra solar power back to the grid and get credited for it on your bill. We prepare the paperwork your utility requires as part of the installation.',
  },
  {
    q: 'Do I need to own the property?',
    a: 'In most cases, yes, or you need written permission from the owner. We will confirm what is needed during your free site visit.',
  },
  {
    q: 'What happens after I request a quote?',
    a: 'We contact you to schedule a free site visit. After that, you receive a system design and an itemized quote. There is no obligation to proceed.',
  },
];

/** Company contact details. */
export const CONTACT = {
  phones: ['+63 927 741 8235', '+63 947 786 7630'],
  // website: 'www.rsmenergy.com',
  email: 'sales.rsmenergy@gmail.com',
  address:
    '21st Floor Park Triangle Tower, 32nd Street cor. 11th Avenue, BGC, Fort Bonifacio, Taguig City, 1635',
};

export const COMPANY_NAME = 'RSM Resilient Energy Solutions';
export const COMPANY_TAGLINE = 'The Future Is Built Within.';
