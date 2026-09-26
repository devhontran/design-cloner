// Design DNA "aim-kharkiv" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#e7e4df",
        "foreground": "#141414",
        "surface": "#141414",
        "surface-foreground": "#e7e4df",
        "muted": "#d9d5ce",
        "muted-foreground": "#686765",
        "border": "#141414",
        "primary": {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dbdbdb",
          "300": "#c2c2c2",
          "400": "#a3a3a3",
          "500": "#878787",
          "600": "#6d6d6d",
          "700": "#535353",
          "800": "#3c3c3c",
          "900": "#272727",
          "950": "#141414",
          "DEFAULT": "#141414"
        },
        "primary-foreground": "#e7e4df",
        "accent": {
          "50": "#fff4f1",
          "100": "#ffe8e2",
          "200": "#ffd0c4",
          "300": "#ffae98",
          "400": "#ff7955",
          "500": "#e8542a",
          "600": "#ca3700",
          "700": "#a32b00",
          "800": "#7f1f00",
          "900": "#601500",
          "950": "#420b00",
          "DEFAULT": "#e8542a"
        },
        "accent-foreground": "#ffffff",
        "ring": "#141414",
        "success": "#287c42",
        "warning": "#8d5e00",
        "danger": "#a34942",
        "neutral": {
          "50": "#fef9f1",
          "100": "#f8f3eb",
          "200": "#e9e4dc",
          "300": "#d8d4cc",
          "400": "#a5a199",
          "500": "#77726b",
          "600": "#57534d",
          "700": "#433f39",
          "800": "#292620",
          "900": "#1a1711",
          "950": "#0d0a05",
          "DEFAULT": "#77726b"
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
        ]
      },
      "fontSize": {
        "base": "0.875rem",
        "lg": "0.875rem",
        "xl": "5.125rem"
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
        "display": "-0.03em",
        "heading": "-0.03em"
      },
      "lineHeight": {
        "display": "0.91",
        "body": "1.2"
      },
      "transitionDuration": {
        "DEFAULT": "200ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      }
    }
  }
};
