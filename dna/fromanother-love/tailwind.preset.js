// Design DNA "fromanother-love" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#051236",
        "foreground": "#fffde2",
        "surface": "#fffde2",
        "surface-foreground": "#1e1e1e",
        "muted": "#0f1f44",
        "muted-foreground": "#9b9f9e",
        "border": "#fffde2",
        "primary": {
          "50": "#f3f7ff",
          "100": "#e4edff",
          "200": "#c9dbff",
          "300": "#a4c2ff",
          "400": "#76a2ff",
          "500": "#4c82ff",
          "600": "#2e66f2",
          "700": "#2051ce",
          "800": "#1740a9",
          "900": "#0d2e83",
          "950": "#051d5e",
          "DEFAULT": "#1740a9"
        },
        "primary-foreground": "#fffde2",
        "accent": {
          "50": "#eaf3f0",
          "100": "#d6e9e3",
          "200": "#b3d9cd",
          "300": "#88c2b2",
          "400": "#5fa895",
          "500": "#3e907d",
          "600": "#257b68",
          "700": "#146555",
          "800": "#0b5143",
          "900": "#033c31",
          "950": "#002920",
          "DEFAULT": "#88c2b2"
        },
        "accent-foreground": "#051236",
        "ring": "#fffde2",
        "success": "#007f38",
        "warning": "#8d5e00",
        "danger": "#b82f2b",
        "neutral": {
          "50": "#f8faff",
          "100": "#eff4fc",
          "200": "#e1e5ed",
          "300": "#d0d4dc",
          "400": "#9ea2a9",
          "500": "#6f737a",
          "600": "#51545b",
          "700": "#3d4046",
          "800": "#23262c",
          "900": "#14171d",
          "950": "#080a0f",
          "DEFAULT": "#6f737a"
        }
      },
      "fontFamily": {
        "display": [
          "\"Inter Tight\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"Inter Tight\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "ui": [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "mono": [
          "\"Instrument Serif\"",
          "Georgia",
          "\"Times New Roman\"",
          "serif"
        ]
      },
      "fontSize": {
        "xs": "0.6875rem",
        "sm": "0.75rem",
        "base": "0.875rem",
        "lg": "0.875rem",
        "xl": "1.0625rem",
        "2xl": "1.5rem",
        "3xl": "4.125rem",
        "4xl": "5.1875rem",
        "5xl": "5.625rem",
        "6xl": "11.25rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "6": "1.5rem",
        "9": "2.25rem",
        "1.5": "0.375rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "23.5": "5.875rem",
        "33.5": "8.375rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "full": "9999px"
      },
      "boxShadow": {
        "md": "rgba(0,0,0,0.15) 0px 4px 24px 0px"
      },
      "maxWidth": {
        "container": "970px"
      },
      "letterSpacing": {
        "display": "-0.03em",
        "heading": "-0.03em"
      },
      "lineHeight": {
        "display": "0.9",
        "body": "1.4"
      },
      "transitionDuration": {
        "DEFAULT": "1200ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.165, 0.84, 0.44, 1)"
      }
    }
  }
};
