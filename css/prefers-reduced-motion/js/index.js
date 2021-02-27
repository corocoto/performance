/** Note that the parentheses around the actual media query are obligatory */
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

/** Listener that will be trigger on `prefers-reduced-motion` value change */
mediaQuery.addEventListener('change', () => {
  console.info(mediaQuery.media, mediaQuery.matches);
});