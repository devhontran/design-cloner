// Design DNA "bennett-clive" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#ffffff",
        "foreground": "#000000",
        "surface": "#000000",
        "surface-foreground": "#ffffff",
        "muted": "#f2f2f2",
        "muted-foreground": "#666666",
        "border": "#000000",
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
        "accent-foreground": "#ffffff",
        "ring": "#000000",
        "success": "#007f38",
        "warning": "#8d5e00",
        "danger": "#af3d36",
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
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
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
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "base": "0.9375rem",
        "lg": "1rem",
        "xl": "1.375rem",
        "2xl": "1.875rem",
        "3xl": "2.8125rem",
        "4xl": "4.6875rem",
        "5xl": "9.375rem"
      },
      "spacing": {
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "19": "4.75rem",
        "22": "5.5rem",
        "14.5": "3.625rem",
        "28.5": "7.125rem",
        "39.5": "9.875rem",
        "56.5": "14.125rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "full": "9999px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1220px"
      },
      "letterSpacing": {
        "display": "-0.07em",
        "heading": "-0.04em"
      },
      "lineHeight": {
        "display": "0.77",
        "body": "1"
      },
      "transitionDuration": {
        "DEFAULT": "800ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.32, 0.94, 0.6, 1)"
      }
    }
  }
};
