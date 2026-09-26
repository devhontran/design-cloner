// Design DNA "active-theory" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#05080c",
        "foreground": "#f2f6f8",
        "surface": "#0f1a20",
        "surface-foreground": "#ffffff",
        "muted": "#16242b",
        "muted-foreground": "#8fa3ad",
        "border": "#2f4a52",
        "primary": {
          "50": "#f2f6f8",
          "100": "#e5edf1",
          "200": "#ccdde5",
          "300": "#aec6d2",
          "400": "#8aa8b6",
          "500": "#6e8d9c",
          "600": "#577584",
          "700": "#435e6b",
          "800": "#324953",
          "900": "#23363f",
          "950": "#16242a",
          "DEFAULT": "#f2f6f8"
        },
        "primary-foreground": "#05080c",
        "accent": {
          "50": "#fff3f9",
          "100": "#ffe6f3",
          "200": "#ffcde8",
          "300": "#ffa7da",
          "400": "#ef7ac1",
          "500": "#d65aa8",
          "600": "#b93f8e",
          "700": "#982a73",
          "800": "#781b59",
          "900": "#5b0f42",
          "950": "#3f052c",
          "DEFAULT": "#d65aa8"
        },
        "accent-foreground": "#ffffff",
        "ring": "#7fd8e0",
        "success": "#287c42",
        "warning": "#8d5e00",
        "danger": "#a34942",
        "neutral": {
          "50": "#f6fbff",
          "100": "#eef4fb",
          "200": "#dfe5ec",
          "300": "#ced5dc",
          "400": "#9ca2a9",
          "500": "#6e747a",
          "600": "#4f555a",
          "700": "#3b4046",
          "800": "#22272c",
          "900": "#13181d",
          "950": "#070b0f",
          "DEFAULT": "#6e747a"
        }
      },
      "fontFamily": {
        "display": [
          "Silkscreen",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"Space Mono\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "mono": [
          "\"Space Mono\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "base": "1.125rem"
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
        "sm": "4px",
        "md": "12px",
        "lg": "24px",
        "full": "9999px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "0.02em",
        "heading": "0.04em"
      },
      "lineHeight": {
        "display": "1",
        "body": "2"
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
