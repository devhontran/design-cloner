// Font knowledge: classification, Google Fonts availability, and free alternatives for commercial faces.

const GOOGLE = new Set(`Inter|Inter Tight|Roboto|Roboto Flex|Roboto Mono|Roboto Slab|Roboto Condensed|Open Sans|Lato|Montserrat|Poppins|Raleway|Nunito|Nunito Sans|
Work Sans|Rubik|Manrope|DM Sans|DM Serif Display|DM Serif Text|DM Mono|Space Grotesk|Space Mono|Outfit|Plus Jakarta Sans|Sora|Urbanist|Lexend|Figtree|
Onest|Geist|Geist Mono|Albert Sans|Be Vietnam Pro|Epilogue|Syne|Unbounded|Archivo|Archivo Black|Bricolage Grotesque|Instrument Sans|Instrument Serif|
Hanken Grotesk|Schibsted Grotesk|Familjen Grotesk|Red Hat Display|Red Hat Text|Red Hat Mono|IBM Plex Sans|IBM Plex Serif|IBM Plex Mono|Source Sans 3|
Source Serif 4|Source Code Pro|Noto Sans|Noto Serif|Merriweather|Merriweather Sans|Playfair Display|Playfair|Lora|Libre Baskerville|Libre Franklin|
Cormorant|Cormorant Garamond|EB Garamond|Crimson Pro|Crimson Text|Fraunces|Newsreader|Literata|Spectral|Bodoni Moda|Gloock|Young Serif|Instrument Serif|
Abril Fatface|Bebas Neue|Anton|Oswald|Barlow|Barlow Condensed|Kanit|Mulish|Karla|Quicksand|Josefin Sans|Cabin|Titillium Web|Fira Sans|Fira Code|
JetBrains Mono|Inconsolata|Ubuntu|Ubuntu Mono|PT Sans|PT Serif|Heebo|Assistant|Hind|Mukta|Oxygen|Arimo|Tinos|Cousine|Chivo|Chivo Mono|Public Sans|
Atkinson Hyperlegible|Readex Pro|Gabarito|Onest|Afacad|Golos Text|Commissioner|Encode Sans|Exo 2|Orbitron|Rajdhani|Teko|Michroma|Major Mono Display|
Caveat|Pacifico|Dancing Script|Permanent Marker|Shadows Into Light|Satisfy|Great Vibes|Righteous|Lobster|Comfortaa|Varela Round|M PLUS Rounded 1c|
Zilla Slab|Arvo|Bitter|Rokkitt|Alegreya|Alegreya Sans|Vollkorn|Cardo|Old Standard TT|Prata|Marcellus|Cinzel|Italiana|Tenor Sans|Syncopate|
Lexend Deca|Mona Sans|Hubot Sans|Pathway Extreme|Radio Canada|Anek Latin|Kumbh Sans|Jost|League Spartan|Spline Sans|Spline Sans Mono|Martian Mono|
Azeret Mono|Sometype Mono|Victor Mono|Overpass|Overpass Mono|Asap|Signika|Sarabun|Prompt|Mitr|Noto Sans Display|Big Shoulders Display|Darker Grotesque|
Tomorrow|Chakra Petch|Space Grotesk|Reddit Sans|Reddit Mono|Funnel Display|Funnel Sans|Host Grotesk|Parkinsans|SUSE|Geologica|Wix Madefor Display|
Wix Madefor Text|Courier Prime|Poltawski Nowy|Petrona|Brygada 1918|Castoro|Rethink Sans|Hedvig Letters Serif|Hedvig Letters Sans|Lugrasimo|Climate Crisis`
  .split(/\s*\|\s*|\n/).map((s) => s.trim().toLowerCase()).filter(Boolean));

// Commercial / proprietary faces -> closest free Google Font.
const ALTERNATIVES = {
  'söhne': 'Inter', 'sohne': 'Inter', 'graphik': 'Inter', 'helvetica neue': 'Inter', helvetica: 'Inter', arial: 'Inter',
  'sf pro': 'Inter', 'sf pro display': 'Inter', 'sf pro text': 'Inter', '-apple-system': 'Inter', 'system-ui': 'Inter', blinkmacsystemfont: 'Inter',
  'segoe ui': 'Inter', 'neue haas grotesk': 'Inter', 'neue haas unica': 'Inter', 'suisse intl': 'Inter', 'suisse int\'l': 'Inter', 'aktiv grotesk': 'Inter',
  'circular': 'DM Sans', 'circular std': 'DM Sans', 'circularxx': 'DM Sans', 'gt walsheim': 'Outfit', 'gt walsheim pro': 'Outfit', 'cerebri sans': 'Manrope',
  'proxima nova': 'Montserrat', 'gotham': 'Montserrat', 'avenir': 'Nunito Sans', 'avenir next': 'Nunito Sans', 'futura': 'Jost', 'futura pt': 'Jost',
  'gt america': 'Inter Tight', 'founders grotesk': 'Hanken Grotesk', 'aeonik': 'Figtree', 'satoshi': 'Plus Jakarta Sans', 'general sans': 'Figtree',
  'switzer': 'Inter', 'cabinet grotesk': 'Bricolage Grotesque', 'clash display': 'Syne', 'clash grotesk': 'Space Grotesk', 'neue montreal': 'Inter',
  'pp neue montreal': 'Inter', 'pp mori': 'Manrope', 'pp editorial new': 'Instrument Serif', 'editorial new': 'Instrument Serif', 'tiempos': 'Newsreader',
  'tiempos headline': 'Fraunces', 'tiempos text': 'Newsreader', 'gt sectra': 'Fraunces', 'canela': 'Cormorant Garamond', 'ogg': 'Gloock', 'domaine display': 'Playfair Display',
  'freight': 'Libre Baskerville', 'freight text pro': 'Libre Baskerville', 'georgia': 'Lora', 'times new roman': 'Tinos', times: 'Tinos', 'garamond': 'EB Garamond',
  'apercu': 'Work Sans', 'basis grotesque': 'Work Sans', 'untitled sans': 'Inter', 'styrene a': 'Space Grotesk', 'styrene b': 'Space Grotesk', 'calibre': 'Figtree',
  'euclid circular a': 'Manrope', 'euclid circular b': 'Manrope', 'matter': 'Figtree', 'neue plak': 'Archivo', 'druk': 'Anton', 'druk wide': 'Unbounded',
  'monument extended': 'Unbounded', 'monument grotesk': 'Space Grotesk', 'sf mono': 'JetBrains Mono', 'menlo': 'JetBrains Mono', monaco: 'JetBrains Mono',
  consolas: 'JetBrains Mono', 'courier new': 'Courier Prime', 'söhne mono': 'IBM Plex Mono', 'berkeley mono': 'JetBrains Mono', 'gt america mono': 'DM Mono',
  'operator mono': 'Fira Code', 'geist': 'Geist', 'geist mono': 'Geist Mono', 'mona sans': 'Mona Sans', 'haffer': 'Inter', 'area normal': 'Manrope',
  'tt norms': 'Manrope', 'tt norms pro': 'Manrope', 'semisqueezed': 'Roboto Condensed', 'semi squeezed': 'Roboto Condensed',
  'pp neue montreal mono': 'Geist Mono', 'neue montreal mono': 'Geist Mono',
  'khtekatrial': 'Inter Tight', 'khteka': 'Inter Tight', 'century gothic': 'Josefin Sans', 'bardford': 'Newsreader', 'bradford': 'Newsreader', 'neuemontreal': 'Inter', 'gt-america': 'Inter Tight', 'halyard display': 'Hanken Grotesk', 'halyard-display-variable': 'Hanken Grotesk', 'zimula': 'Figtree', 'ktf metro roman': 'Marcellus', 'ktf metro blueline': 'Michroma', 'suissebpintl': 'Inter', 'sometype': 'Sometype Mono', 'ambroise francois std': 'Bodoni Moda', 'ambroise-francois-std': 'Bodoni Moda', 'maison neue extended': 'Archivo', 'maison neue': 'Inter',
};

const SYSTEM = new Set(['-apple-system', 'blinkmacsystemfont', 'system-ui', 'segoe ui', 'helvetica', 'helvetica neue', 'arial', 'sans-serif', 'serif',
  'monospace', 'georgia', 'times new roman', 'times', 'menlo', 'monaco', 'consolas', 'courier new', 'ui-sans-serif', 'ui-serif', 'ui-monospace', 'sf pro', 'sf mono']);

const SERIF_HINT = /serif|garamond|baskerville|playfair|lora|merriweather|fraunces|newsreader|literata|spectral|bodoni|gloock|cormorant|crimson|tiempos|canela|georgia|times|freight|sectra|ogg|domaine|editorial|prata|cardo|vollkorn|alegreya(?! sans)|caslon|didot|minion|charter|recoleta|young serif|tinos|cinzel|marcellus|italiana|petrona|castoro|brygada/i;
const MONO_HINT = /mono|code|courier|consolas|menlo|monaco|inconsolata/i;
const DISPLAY_HINT = /display|bebas|anton|oswald|druk|syne|unbounded|clash|monument|abril|righteous|lobster|orbitron|michroma|syncopate|teko|big shoulders/i;
const SCRIPT_HINT = /script|caveat|pacifico|vibes|satisfy|marker|hand/i;

export function classifyFont(name, generic = '') {
  const g = generic.toLowerCase();
  if (MONO_HINT.test(name) || g.includes('monospace')) return 'mono';
  if (SCRIPT_HINT.test(name) || g === 'cursive') return 'script';
  if (SERIF_HINT.test(name) && !/sans/i.test(name)) return 'serif';
  if (g === 'serif' || g === 'ui-serif') return 'serif';
  if (DISPLAY_HINT.test(name)) return 'display';
  return 'sans';
}

export function fontInfo(name, { generic = '', stack = '', googleLinks = [] } = {}) {
  const key = String(name).toLowerCase().replace(/\s+(variable|vf|var)$/i, '').trim();
  const linked = googleLinks.some((l) => decodeURIComponent(l).toLowerCase().replace(/\+/g, ' ').includes(`family=${key}`));
  const google = linked || GOOGLE.has(key);
  const system = SYSTEM.has(key);
  const category = classifyFont(name, generic);
  const fallback = category === 'serif' ? 'Georgia, "Times New Roman", serif'
    : category === 'mono' ? 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace'
      : 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
  const alternative = google ? null : ALTERNATIVES[key] || (category === 'serif' ? 'Newsreader' : category === 'mono' ? 'JetBrains Mono' : category === 'display' ? 'Bricolage Grotesque' : 'Inter');
  return {
    name,
    category,
    source: google ? 'google' : system ? 'system' : 'custom',
    // what to actually load in a new build: the font itself if free, otherwise the closest Google Font
    use: google ? name : alternative,
    alternative,
    fallback,
    observedStack: stack || undefined,
  };
}

export function googleFontsUrl(families) {
  const uniq = [...new Map(families.filter((f) => f && f.use && GOOGLE.has(f.use.toLowerCase())).map((f) => [f.use, f])).values()];
  if (!uniq.length) return null;
  const q = uniq.map((f) => {
    const weights = [...new Set([400, 500, 600, 700, ...(f.weights || [])])].filter((w) => w >= 100 && w <= 900 && w % 100 === 0).sort((a, b) => a - b);
    return `family=${encodeURIComponent(f.use).replace(/%20/g, '+')}:wght@${weights.join(';')}`;
  });
  return `https://fonts.googleapis.com/css2?${q.join('&')}&display=swap`;
}
