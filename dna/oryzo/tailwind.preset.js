// Design DNA "oryzo" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#100904",
        "foreground": "#ffedd7",
        "surface": "#1b140d",
        "surface-foreground": "#ffedd7",
        "muted": "#241a12",
        "muted-foreground": "#9f9283",
        "border": "#40362e",
        "primary": {
          "50": "#fff8f0",
          "100": "#ffedd7",
          "200": "#fad7aa",
          "300": "#eeba75",
          "400": "#d5963b",
          "500": "#b87900",
          "600": "#986300",
          "700": "#7a4f00",
          "800": "#603d00",
          "900": "#482c00",
          "950": "#311d00",
          "DEFAULT": "#ffedd7"
        },
        "primary-foreground": "#100904",
        "accent": {
          "50": "#fff4f0",
          "100": "#ffe6dd",
          "200": "#ffccba",
          "300": "#ffa786",
          "400": "#f77440",
          "500": "#dc5000",
          "600": "#b84100",
          "700": "#943300",
          "800": "#752600",
          "900": "#591b00",
          "950": "#3e1000",
          "DEFAULT": "#dc5000"
        },
        "accent-foreground": "#ffedd7",
        "ring": "#dc5000",
        "success": "#009f48",
        "warning": "#b17700",
        "danger": "#df4841",
        "neutral": {
          "50": "#fff9f4",
          "100": "#f9f2eb",
          "200": "#ebe3dd",
          "300": "#dad3cc",
          "400": "#a7a09a",
          "500": "#78726c",
          "600": "#59534d",
          "700": "#443e39",
          "800": "#2b2520",
          "900": "#1b1612",
          "950": "#0e0906",
          "DEFAULT": "#78726c"
        }
      },
      "fontFamily": {
        "display": [
          "\"Hanken Grotesk\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"Hanken Grotesk\"",
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
        "sm": "0.75rem",
        "base": "0.875rem",
        "lg": "0.875rem",
        "xl": "1.125rem",
        "2xl": "1.5rem",
        "3xl": "1.8125rem",
        "4xl": "2.5625rem",
        "5xl": "3.1875rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "6": "1.5rem",
        "8": "2rem",
        "17": "4.25rem",
        "51": "12.75rem",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "10.5": "2.625rem",
        "11.5": "2.875rem"
      },
      "borderRadius": {
        "sm": "12px",
        "full": "9999px"
      },
      "boxShadow": {
        "sm": "rgba(255,160,0,1) 0px 0px 3px 2px inset, rgba(224,112,16,1) 0px 0px 8px 4px inset",
        "lg": "rgba(255,140,0,0.6) 0px 0px 10px 3px"
      },
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "-0.02em",
        "heading": "-0.02em"
      },
      "lineHeight": {
        "display": "0.9",
        "body": "1.2"
      },
      "transitionDuration": {
        "DEFAULT": "300ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      }
    }
  }
};
