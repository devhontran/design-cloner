// Design DNA "sondaven" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#2c2824",
        "foreground": "#a89474",
        "surface": "#a89474",
        "surface-foreground": "#2c2824",
        "muted": "#39342f",
        "muted-foreground": "#8a7a60",
        "border": "#a89474",
        "primary": {
          "50": "#f7f4ef",
          "100": "#ede7de",
          "200": "#ddd2bf",
          "300": "#c7b69b",
          "400": "#a89474",
          "500": "#907b59",
          "600": "#7a6644",
          "700": "#645234",
          "800": "#504027",
          "900": "#3d311c",
          "950": "#292010",
          "DEFAULT": "#a89474"
        },
        "primary-foreground": "#2c2824",
        "accent": {
          "50": "#fbf9f4",
          "100": "#f4efe6",
          "200": "#e6dcca",
          "300": "#d1c2a8",
          "400": "#b3a282",
          "500": "#988664",
          "600": "#7f6e4d",
          "700": "#67573a",
          "800": "#50432b",
          "900": "#3c311d",
          "950": "#282011",
          "DEFAULT": "#f4efe6"
        },
        "accent-foreground": "#2c2824",
        "ring": "#a89474",
        "success": "#5bac6f",
        "warning": "#c28b36",
        "danger": "#d7786e",
        "neutral": {
          "50": "#fff9f3",
          "100": "#f9f2eb",
          "200": "#eae3dc",
          "300": "#dad3cc",
          "400": "#a7a09a",
          "500": "#78726c",
          "600": "#59534d",
          "700": "#443f39",
          "800": "#2b2520",
          "900": "#1b1611",
          "950": "#0e0906",
          "DEFAULT": "#78726c"
        }
      },
      "fontFamily": {
        "display": [
          "Marcellus",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "Michroma",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "xs": "0.625rem",
        "sm": "0.75rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3.5rem",
        "5xl": "4.5rem",
        "6xl": "6rem",
        "7xl": "9rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "6": "1.5rem",
        "8": "2rem",
        "12": "3rem",
        "15": "3.75rem",
        "0.5": "0.125rem"
      },
      "borderRadius": {
        "sm": "0px",
        "full": "9999px",
        "md": "0px",
        "lg": "0px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "930px"
      },
      "letterSpacing": {
        "display": "-0.01em",
        "heading": "0em"
      },
      "lineHeight": {
        "display": "0.95",
        "body": "1.6"
      },
      "transitionDuration": {
        "DEFAULT": "600ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 1, 0.5, 1)"
      }
    }
  }
};
