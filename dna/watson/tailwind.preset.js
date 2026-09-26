// Design DNA "watson" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#ffffff",
        "foreground": "#000000",
        "surface": "#f2f2f2",
        "surface-foreground": "#000000",
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
          "50": "#fef5f1",
          "100": "#fbe8e0",
          "200": "#f6d2c1",
          "300": "#eab59d",
          "400": "#d39577",
          "500": "#bb7a5b",
          "600": "#a36446",
          "700": "#895136",
          "800": "#70412a",
          "900": "#552f1c",
          "950": "#3b1e10",
          "DEFAULT": "#70412a"
        },
        "accent-foreground": "#ffffff",
        "ring": "#000000",
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
          "\"Archivo Narrow\"",
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
        "mono": [
          "Newsreader",
          "Georgia",
          "\"Times New Roman\"",
          "serif"
        ]
      },
      "fontSize": {
        "base": "1.25rem",
        "lg": "1.25rem",
        "xl": "5.5625rem",
        "2xl": "20.0625rem"
      },
      "spacing": {
        "2": "0.5rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "9": "2.25rem",
        "22": "5.5rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "full": "9999px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "910px"
      },
      "letterSpacing": {
        "display": "-0.018em",
        "heading": "-0.02em"
      },
      "lineHeight": {
        "display": "0.91",
        "body": "1.25"
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
