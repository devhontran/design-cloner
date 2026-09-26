// Design DNA "david-whyte" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#e8e7e2",
        "foreground": "#000000",
        "surface": "#ffffff",
        "surface-foreground": "#000000",
        "muted": "#efeae2",
        "muted-foreground": "#605e5a",
        "border": "#d2cec7",
        "primary": {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dbdbdb",
          "300": "#c2c2c2",
          "400": "#a3a3a3",
          "500": "#878787",
          "600": "#626262",
          "700": "#3e3e3e",
          "800": "#1f1f1f",
          "900": "#060606",
          "950": "#000000",
          "DEFAULT": "#000000"
        },
        "primary-foreground": "#ffffff",
        "accent": {
          "50": "#f8f8ec",
          "100": "#f0efd6",
          "200": "#e1dfac",
          "300": "#ccc87b",
          "400": "#afa945",
          "500": "#958e09",
          "600": "#7b7500",
          "700": "#625d00",
          "800": "#4c4800",
          "900": "#383500",
          "950": "#252300",
          "DEFAULT": "#958e09"
        },
        "accent-foreground": "#ffffff",
        "ring": "#000000",
        "success": "#007f38",
        "warning": "#8d5e00",
        "danger": "#c2181d",
        "neutral": {
          "50": "#fcfaf1",
          "100": "#f5f4eb",
          "200": "#e7e5dc",
          "300": "#d6d4cc",
          "400": "#a3a299",
          "500": "#75736b",
          "600": "#56544d",
          "700": "#414039",
          "800": "#282720",
          "900": "#191711",
          "950": "#0b0a05",
          "DEFAULT": "#75736b"
        }
      },
      "fontFamily": {
        "display": [
          "Newsreader",
          "Georgia",
          "\"Times New Roman\"",
          "serif"
        ],
        "sans": [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "ui": [
          "Tinos",
          "Georgia",
          "\"Times New Roman\"",
          "serif"
        ]
      },
      "fontSize": {
        "2xs": "0.875rem",
        "xs": "0.9375rem",
        "sm": "1rem",
        "base": "1.125rem",
        "lg": "1.25rem",
        "xl": "1.375rem",
        "2xl": "2rem",
        "3xl": "3.25rem",
        "4xl": "5.375rem"
      },
      "spacing": {
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "8": "2rem",
        "16": "4rem",
        "18": "4.5rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem"
      },
      "borderRadius": {
        "sm": "2px",
        "md": "2px",
        "full": "9999px",
        "lg": "4px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1380px"
      },
      "letterSpacing": {
        "display": "-0.01em",
        "heading": "0em"
      },
      "lineHeight": {
        "display": "1.05",
        "body": "1.4"
      },
      "transitionDuration": {
        "DEFAULT": "800ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      }
    }
  }
};
