// Design DNA "by-kin" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#f4f2ed",
        "foreground": "#111214",
        "surface": "#111214",
        "surface-foreground": "#f4f2ed",
        "muted": "#e8e5de",
        "muted-foreground": "#6c6c6b",
        "border": "#111214",
        "primary": {
          "50": "#fff4f1",
          "100": "#ffe6df",
          "200": "#ffccc0",
          "300": "#ffa792",
          "400": "#fe6e4e",
          "500": "#e54825",
          "600": "#c72d00",
          "700": "#a12200",
          "800": "#7f1900",
          "900": "#601000",
          "950": "#430800",
          "DEFAULT": "#fe6e4e"
        },
        "primary-foreground": "#111214",
        "accent": {
          "50": "#fff4f1",
          "100": "#ffe6df",
          "200": "#ffccc0",
          "300": "#ffa792",
          "400": "#fe6e4e",
          "500": "#e54825",
          "600": "#c72d00",
          "700": "#a12200",
          "800": "#7f1900",
          "900": "#601000",
          "950": "#430800",
          "DEFAULT": "#fe6e4e"
        },
        "accent-foreground": "#111214",
        "ring": "#fe6e4e",
        "success": "#29c05f",
        "warning": "#d79100",
        "danger": "#ff6b60",
        "neutral": {
          "50": "#fdfaf1",
          "100": "#f7f3eb",
          "200": "#e8e4dc",
          "300": "#d7d4cc",
          "400": "#a4a199",
          "500": "#76736b",
          "600": "#57544d",
          "700": "#423f39",
          "800": "#292620",
          "900": "#191711",
          "950": "#0c0a05",
          "DEFAULT": "#76736b"
        }
      },
      "fontFamily": {
        "display": [
          "\"DM Sans\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"DM Sans\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "mono": [
          "\"DM Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
        "base": "1rem",
        "lg": "1.6875rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "6": "1.5rem",
        "8": "2rem",
        "12": "3rem",
        "16": "4rem",
        "24": "6rem",
        "32": "8rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "full": "9999px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "-0.02em",
        "heading": "0em"
      },
      "lineHeight": {
        "display": "1",
        "body": "1.4"
      },
      "transitionDuration": {
        "DEFAULT": "1200ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.76, 0, 0.24, 1)"
      }
    }
  }
};
