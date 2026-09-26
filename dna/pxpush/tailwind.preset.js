// Design DNA "pxpush" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#1a1a1a",
        "foreground": "#d9d9d9",
        "surface": "#111111",
        "surface-foreground": "#bababa",
        "muted": "#2a2a2a",
        "muted-foreground": "#8a8a8a",
        "border": "#8c8c8c",
        "primary": {
          "50": "#f3f7ff",
          "100": "#e4edff",
          "200": "#c9dbff",
          "300": "#a5c2ff",
          "400": "#759fff",
          "500": "#497dff",
          "600": "#2258ff",
          "700": "#0827f7",
          "800": "#0514c7",
          "900": "#03049c",
          "950": "#020070",
          "DEFAULT": "#03049c"
        },
        "primary-foreground": "#ffffff",
        "accent": {
          "50": "#deffe2",
          "100": "#b6ffc2",
          "200": "#3cff7b",
          "300": "#00e665",
          "400": "#00c154",
          "500": "#00a245",
          "600": "#008738",
          "700": "#006c2c",
          "800": "#005420",
          "900": "#003f16",
          "950": "#002a0c",
          "DEFAULT": "#3cff7b"
        },
        "accent-foreground": "#0a0a0a",
        "ring": "#d9d9d9",
        "success": "#007f38",
        "warning": "#8d5e00",
        "danger": "#c2181d",
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
          "\"Roboto Condensed\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"Geist Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ],
        "mono": [
          "\"Geist Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
        "sm": "0.75rem",
        "base": "1.0625rem",
        "lg": "1.5625rem",
        "xl": "2rem",
        "2xl": "2.5625rem",
        "3xl": "4rem",
        "4xl": "5.4375rem",
        "5xl": "10.8125rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "9": "2.25rem",
        "11": "2.75rem",
        "29": "7.25rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem",
        "14.5": "3.625rem"
      },
      "borderRadius": {
        "sm": "0px",
        "full": "9999px",
        "md": "0px",
        "lg": "0px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1350px"
      },
      "letterSpacing": {
        "display": "-0.008em",
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "0.96",
        "body": "1.5"
      },
      "transitionDuration": {
        "DEFAULT": "800ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  }
};
