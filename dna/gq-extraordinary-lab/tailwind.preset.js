// Design DNA "gq-extraordinary-lab" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#000000",
        "foreground": "#ffffff",
        "surface": "#0b0b0b",
        "surface-foreground": "#161616",
        "muted": "#161616",
        "muted-foreground": "#8c8c8c",
        "border": "#4d4d4d",
        "primary": {
          "50": "#ffffff",
          "100": "#f3f3f3",
          "200": "#dfdfdf",
          "300": "#c5c5c5",
          "400": "#a4a4a4",
          "500": "#878787",
          "600": "#707070",
          "700": "#595959",
          "800": "#454545",
          "900": "#333333",
          "950": "#222222",
          "DEFAULT": "#ffffff"
        },
        "primary-foreground": "#000000",
        "accent": {
          "50": "#fff6f1",
          "100": "#feecdf",
          "200": "#fbd7be",
          "300": "#f1bc96",
          "400": "#d99a6c",
          "500": "#bd7b49",
          "600": "#a2622f",
          "700": "#844c1d",
          "800": "#683910",
          "900": "#4e2806",
          "950": "#361901",
          "DEFAULT": "#d99a6c"
        },
        "accent-foreground": "#000000",
        "ring": "#ffffff",
        "success": "#287c42",
        "warning": "#8d5e00",
        "danger": "#a34942",
        "neutral": {
          "50": "#fafafa",
          "100": "#f3f3f3",
          "200": "#e4e4e4",
          "300": "#d4d4d4",
          "400": "#a1a1a1",
          "500": "#737373",
          "600": "#545454",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717",
          "950": "#0a0a0a",
          "DEFAULT": "#737373"
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
        "xs": "0.625rem",
        "sm": "0.6875rem",
        "base": "1rem"
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
        "display": "0.02em",
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "1.1",
        "body": "1.5"
      },
      "transitionDuration": {
        "DEFAULT": "500ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      }
    }
  }
};
