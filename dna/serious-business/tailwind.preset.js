// Design DNA "serious-business" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#fbc1d4",
        "foreground": "#1e1e1e",
        "surface": "#1e1e1e",
        "surface-foreground": "#fbc1d4",
        "muted": "#ffffff",
        "muted-foreground": "#765f67",
        "border": "#1e1e1e",
        "primary": {
          "50": "#fff7fb",
          "100": "#ffedf5",
          "200": "#ffd7e9",
          "300": "#ffb4d9",
          "400": "#ff7ec4",
          "500": "#e258a6",
          "600": "#c23a8b",
          "700": "#9f236f",
          "800": "#7c1355",
          "900": "#5d053e",
          "950": "#41002a",
          "DEFAULT": "#ff7ec4"
        },
        "primary-foreground": "#1e1e1e",
        "accent": {
          "50": "#f5f2ff",
          "100": "#eae4ff",
          "200": "#d9ccff",
          "300": "#c3abff",
          "400": "#a788ed",
          "500": "#8f6bd6",
          "600": "#7954bd",
          "700": "#62419e",
          "800": "#4d3180",
          "900": "#3a2262",
          "950": "#271546",
          "DEFAULT": "#c3abff"
        },
        "accent-foreground": "#1e1e1e",
        "ring": "#ff7ec4",
        "success": "#3ac266",
        "warning": "#db9400",
        "danger": "#ff7267",
        "neutral": {
          "50": "#fff8fa",
          "100": "#fbf0f3",
          "200": "#ece1e4",
          "300": "#dbd1d4",
          "400": "#a89fa1",
          "500": "#797073",
          "600": "#5a5154",
          "700": "#453d40",
          "800": "#2c2426",
          "900": "#1c1517",
          "950": "#0e080a",
          "DEFAULT": "#797073"
        }
      },
      "fontFamily": {
        "display": [
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "Manrope",
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
          "Newsreader",
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
        "xl": "0.9375rem",
        "2xl": "1.125rem",
        "3xl": "1.3125rem",
        "4xl": "1.5rem",
        "5xl": "2.25rem",
        "6xl": "4.5rem",
        "7xl": "6.5625rem"
      },
      "spacing": {
        "3": "0.75rem",
        "4": "1rem",
        "6": "1.5rem",
        "12": "3rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "23": "5.75rem",
        "0.75": "0.1875rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "4.5": "1.125rem",
        "7.5": "1.875rem",
        "12.5": "3.125rem",
        "13.5": "3.375rem"
      },
      "borderRadius": {
        "sm": "6px",
        "md": "12px",
        "full": "9999px",
        "lg": "12px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1390px"
      },
      "letterSpacing": {
        "display": "-0.02em",
        "heading": "-0.02em"
      },
      "lineHeight": {
        "display": "0.9",
        "body": "1.2"
      },
      "transitionDuration": {
        "DEFAULT": "500ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.5, 1, 0.89, 1)"
      }
    }
  }
};
