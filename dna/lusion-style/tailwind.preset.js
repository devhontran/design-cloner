// Design DNA "lusion-style" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#f0f1fa",
        "foreground": "#0a0a0a",
        "surface": "#ffffff",
        "surface-foreground": "#0a0a0a",
        "muted": "#e4e6f2",
        "muted-foreground": "#7f7f7f",
        "border": "#d6d8e6",
        "primary": {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dbdbdb",
          "300": "#c2c2c2",
          "400": "#a3a3a3",
          "500": "#878787",
          "600": "#6a6a6a",
          "700": "#4e4e4e",
          "800": "#343434",
          "900": "#1e1e1e",
          "950": "#0a0a0a",
          "DEFAULT": "#0a0a0a"
        },
        "primary-foreground": "#ffffff",
        "accent": {
          "50": "#f3f7ff",
          "100": "#e5edff",
          "200": "#cadbff",
          "300": "#a8c3ff",
          "400": "#7aa1ff",
          "500": "#5280ff",
          "600": "#315eff",
          "700": "#1a2ffb",
          "800": "#121dcb",
          "900": "#0b0d9f",
          "950": "#050273",
          "DEFAULT": "#1a2ffb"
        },
        "accent-foreground": "#ffffff",
        "ring": "#1a2ffb",
        "success": "#147e3b",
        "warning": "#8d5e00",
        "danger": "#a9433c",
        "neutral": {
          "50": "#f9faff",
          "100": "#f2f3fc",
          "200": "#e3e4ed",
          "300": "#d2d3dc",
          "400": "#a0a1a9",
          "500": "#71727a",
          "600": "#52535b",
          "700": "#3e3f46",
          "800": "#25262c",
          "900": "#16171d",
          "950": "#090a0f",
          "DEFAULT": "#71727a"
        }
      },
      "fontFamily": {
        "display": [
          "Figtree",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "Figtree",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "ui": [
          "\"Hanken Grotesk\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "mono": [
          "\"IBM Plex Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
        "2xs": "0.625rem",
        "xs": "0.6875rem",
        "sm": "0.75rem",
        "base": "0.8125rem",
        "lg": "0.875rem",
        "xl": "0.9375rem",
        "2xl": "1rem",
        "3xl": "1.125rem",
        "4xl": "1.1875rem",
        "5xl": "1.25rem",
        "6xl": "1.375rem",
        "7xl": "1.75rem",
        "8xl": "1.875rem",
        "9xl": "2rem"
      },
      "spacing": {
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "10": "2.5rem",
        "15": "3.75rem",
        "0.75": "0.1875rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "7.5": "1.875rem",
        "9.5": "2.375rem",
        "12.5": "3.125rem"
      },
      "borderRadius": {
        "sm": "4px",
        "md": "8px",
        "lg": "18px",
        "xl": "24px",
        "2xl": "18px",
        "full": "9999px"
      },
      "boxShadow": {
        "sm": "rgba(1,244,203,1) 0px 0px 0px 0px",
        "md": "rgba(0,0,0,0.04) 0px 6px 10px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px",
        "lg": "rgba(255,140,0,0.6) 0px 0px 10px 3px"
      },
      "maxWidth": {
        "container": "1300px"
      },
      "letterSpacing": {
        "display": "-0.03em",
        "heading": "-0.02em"
      },
      "lineHeight": {
        "display": "0.95",
        "body": "1.35"
      },
      "transitionDuration": {
        "DEFAULT": "900ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.52, 0.01, 0, 1)"
      }
    }
  }
};
