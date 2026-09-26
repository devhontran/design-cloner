// Design DNA "hellomonday-style" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#ffffff",
        "foreground": "#000000",
        "surface": "#000000",
        "surface-foreground": "#ffffff",
        "muted": "#f2f2f2",
        "muted-foreground": "#8a8a8a",
        "border": "#e6e6e6",
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
          "50": "#f5f6ff",
          "100": "#eaebff",
          "200": "#d5d6ff",
          "300": "#babaff",
          "400": "#9893ff",
          "500": "#7d6bff",
          "600": "#6a3cff",
          "700": "#5625d8",
          "800": "#4215ae",
          "900": "#310888",
          "950": "#210162",
          "DEFAULT": "#6a3cff"
        },
        "accent-foreground": "#ffffff",
        "ring": "#000000",
        "success": "#4eaf68",
        "warning": "#c98915",
        "danger": "#e07368",
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
          "Rokkitt",
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
          "Orbitron",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ],
        "mono": [
          "\"JetBrains Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
        "xs": "0.625rem",
        "sm": "0.75rem",
        "base": "0.8125rem",
        "lg": "0.875rem",
        "xl": "1rem",
        "2xl": "1.125rem",
        "3xl": "1.25rem",
        "4xl": "1.4375rem",
        "5xl": "1.5625rem",
        "6xl": "1.75rem",
        "7xl": "1.9375rem",
        "8xl": "2rem",
        "9xl": "2.25rem"
      },
      "spacing": {
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "0.75": "0.1875rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "7.5": "1.875rem",
        "12.5": "3.125rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "full": "9999px"
      },
      "boxShadow": {
        "sm": "rgba(255,255,255,0.54) 10px 0px 0px 0px, rgba(255,255,255,0.54) -10px 0px 0px 0px",
        "md": "rgba(0,0,0,0.4) 0px 0px 2px 0px",
        "lg": "rgba(0,0,0,0.2) 0px 0px 5px 0px"
      },
      "maxWidth": {
        "container": "1300px"
      },
      "letterSpacing": {
        "display": "-0.01em",
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "1",
        "body": "1.35"
      },
      "transitionDuration": {
        "DEFAULT": "700ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.65, 0, 0.35, 1)"
      }
    }
  }
};
