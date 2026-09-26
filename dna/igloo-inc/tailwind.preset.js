// Design DNA "igloo-inc" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#a0a5b1",
        "foreground": "#ffffff",
        "surface": "#d6dae2",
        "surface-foreground": "#12161e",
        "muted": "#8f949f",
        "muted-foreground": "#e6e9ef",
        "border": "#ffffff",
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
        "primary-foreground": "#12161e",
        "accent": {
          "50": "#f5f7f9",
          "100": "#eaedf2",
          "200": "#d5dbe6",
          "300": "#bbc3d2",
          "400": "#9aa3b6",
          "500": "#7e889b",
          "600": "#646d80",
          "700": "#4c5464",
          "800": "#363d4b",
          "900": "#232934",
          "950": "#12161e",
          "DEFAULT": "#12161e"
        },
        "accent-foreground": "#ffffff",
        "ring": "#ffffff",
        "success": "#287c42",
        "warning": "#8d5e00",
        "danger": "#a34942",
        "neutral": {
          "50": "#f8faff",
          "100": "#f0f3fc",
          "200": "#e1e4ed",
          "300": "#d1d4dc",
          "400": "#9ea1a9",
          "500": "#70737a",
          "600": "#51545b",
          "700": "#3d4046",
          "800": "#24262c",
          "900": "#15171d",
          "950": "#080a0f",
          "DEFAULT": "#70737a"
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
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ],
        "mono": [
          "\"Space Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
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
        "display": "-0.01em",
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "1.15",
        "body": "1.3"
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
