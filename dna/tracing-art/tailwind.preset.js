// Design DNA "tracing-art" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#ffffff",
        "foreground": "#000000",
        "surface": "#f1f1f1",
        "surface-foreground": "#000000",
        "muted": "#f1f1f1",
        "muted-foreground": "#666666",
        "border": "#e0e0e0",
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
          "50": "#f7f6f5",
          "100": "#eeecea",
          "200": "#dedad5",
          "300": "#c7c2ba",
          "400": "#a9a299",
          "500": "#8e867d",
          "600": "#746d64",
          "700": "#5b554d",
          "800": "#443f39",
          "900": "#302c27",
          "950": "#1d1a16",
          "DEFAULT": "#1d1a16"
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
          "Newsreader",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "Newsreader",
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
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "sm": "0.8125rem",
        "base": "1rem",
        "lg": "3.375rem",
        "xl": "4.5rem"
      },
      "spacing": {
        "7": "1.75rem",
        "9": "2.25rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "11.5": "2.875rem"
      },
      "borderRadius": {
        "sm": "4px",
        "md": "6px",
        "lg": "11px",
        "full": "9999px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "-0.03em",
        "heading": "-0.02em"
      },
      "lineHeight": {
        "display": "1",
        "body": "1.5"
      },
      "transitionDuration": {
        "DEFAULT": "800ms"
      },
      "transitionTimingFunction": {
        "brand": "ease-in-out"
      }
    }
  }
};
