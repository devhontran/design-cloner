// Design DNA "inkfish" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
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
          "Archivo",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"Martian Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ],
        "mono": [
          "\"Martian Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
        "sm": "0.75rem",
        "base": "1rem",
        "lg": "2.5rem",
        "xl": "10rem"
      },
      "spacing": {
        "2": "0.5rem",
        "3": "0.75rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "10": "2.5rem",
        "0.5": "0.125rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "full": "9999px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1080px"
      },
      "letterSpacing": {
        "display": "-0.04em",
        "heading": "-0.02em"
      },
      "lineHeight": {
        "display": "0.85",
        "body": "1.3"
      },
      "transitionDuration": {
        "DEFAULT": "300ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 1, 0.5, 1)"
      }
    }
  }
};
