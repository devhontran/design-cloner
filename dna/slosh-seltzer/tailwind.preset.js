// Design DNA "slosh-seltzer" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#00a165",
        "foreground": "#ffc1ff",
        "surface": "#ffc1ff",
        "surface-foreground": "#ff0837",
        "muted": "#ffabe7",
        "muted-foreground": "#ff79b1",
        "border": "#ffc1ff",
        "primary": {
          "50": "#fff4f3",
          "100": "#ffe7e5",
          "200": "#ffceca",
          "300": "#ffaaa5",
          "400": "#ff7170",
          "500": "#ff0837",
          "600": "#d5002b",
          "700": "#ac0021",
          "800": "#870017",
          "900": "#66000f",
          "950": "#470007",
          "DEFAULT": "#ff0837"
        },
        "primary-foreground": "#ffc1ff",
        "accent": {
          "50": "#fff1ff",
          "100": "#ffe0ff",
          "200": "#ffc1ff",
          "300": "#f69bf8",
          "400": "#df6fe2",
          "500": "#c54bc9",
          "600": "#ab2faf",
          "700": "#8d1a91",
          "800": "#700d73",
          "900": "#550358",
          "950": "#3b003e",
          "DEFAULT": "#ffc1ff"
        },
        "accent-foreground": "#00a165",
        "ring": "#ff0837",
        "success": "#00a64c",
        "warning": "#b87c00",
        "danger": "#ea4841",
        "neutral": {
          "50": "#f4fdf7",
          "100": "#edf6f0",
          "200": "#dee7e1",
          "300": "#ced7d1",
          "400": "#9ca49f",
          "500": "#6d7570",
          "600": "#4f5651",
          "700": "#3b423d",
          "800": "#222824",
          "900": "#131915",
          "950": "#060c08",
          "DEFAULT": "#6d7570"
        }
      },
      "fontFamily": {
        "display": [
          "\"Big Shoulders Display\"",
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
        "xs": "0.6875rem",
        "sm": "0.75rem",
        "base": "1rem",
        "lg": "1.5rem",
        "xl": "2.375rem",
        "2xl": "2.5rem",
        "3xl": "12.9375rem"
      },
      "spacing": {
        "5": "1.25rem",
        "7": "1.75rem",
        "23": "5.75rem",
        "25": "6.25rem",
        "5.5": "1.375rem",
        "8.5": "2.125rem",
        "12.5": "3.125rem",
        "13.5": "3.375rem",
        "20.5": "5.125rem"
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
        "heading": "0em"
      },
      "lineHeight": {
        "display": "0.85",
        "body": "1.4"
      },
      "transitionDuration": {
        "DEFAULT": "600ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.215, 0.61, 0.355, 1)"
      }
    }
  }
};
