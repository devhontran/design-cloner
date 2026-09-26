// Design DNA "lamalama" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#1a1c1c",
        "foreground": "#f9f4eb",
        "surface": "#232525",
        "surface-foreground": "#f9f4eb",
        "muted": "#303231",
        "muted-foreground": "#a09e98",
        "border": "#474745",
        "primary": {
          "50": "#f9f4eb",
          "100": "#f4ead7",
          "200": "#ecd7b1",
          "300": "#dcbd84",
          "400": "#c29d55",
          "500": "#a8812e",
          "600": "#8f690b",
          "700": "#745300",
          "800": "#5a4000",
          "900": "#432f00",
          "950": "#2e1f00",
          "DEFAULT": "#f9f4eb"
        },
        "primary-foreground": "#1a1c1c",
        "accent": {
          "50": "#fff4f2",
          "100": "#ffe7e3",
          "200": "#ffcec5",
          "300": "#ffaa9c",
          "400": "#ff715f",
          "500": "#ff0000",
          "600": "#d50000",
          "700": "#ac0000",
          "800": "#870000",
          "900": "#660000",
          "950": "#470000",
          "DEFAULT": "#ff0000"
        },
        "accent-foreground": "#ffffff",
        "ring": "#f9f4eb",
        "success": "#00a44b",
        "warning": "#b67b00",
        "danger": "#e94640",
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
        ],
        "mono": [
          "\"Sometype Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
        "xs": "0.625rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "4.5rem",
        "5xl": "5rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "14": "3.5rem",
        "58": "14.5rem",
        "0.5": "0.125rem",
        "2.5": "0.625rem",
        "25.5": "6.375rem"
      },
      "borderRadius": {
        "sm": "2px",
        "md": "2px",
        "full": "9999px",
        "lg": "2px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1360px"
      },
      "letterSpacing": {
        "display": "-0.02em",
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "0.8",
        "body": "1.4"
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
