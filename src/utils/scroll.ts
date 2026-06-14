/** Smoothly scroll a section into view by its element id. */
export const scrollToSection = (id: string): void => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
