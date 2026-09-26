// Design DNA "miux-studio" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#f7f3ed",
        "foreground": "#333335",
        "surface": "#d5c8b0",
        "surface-foreground": "#333335",
        "muted": "#e6e2dc",
        "muted-foreground": "#7b7976",
        "border": "#e6e2dc",
        "primary": {
          "50": "#f7f7f7",
          "100": "#ededee",
          "200": "#dadadc",
          "300": "#c2c2c5",
          "400": "#a3a3a6",
          "500": "#87878b",
          "600": "#707073",
          "700": "#59595c",
          "800": "#454548",
          "900": "#333335",
          "950": "#222223",
          "DEFAULT": "#333335"
        },
        "primary-foreground": "#f7f3ed",
        "accent": {
          "50": "#fcf6ef",
          "100": "#f7ebdc",
          "200": "#f0d8bb",
          "300": "#e2be94",
          "400": "#c99e6a",
          "500": "#b08349",
          "600": "#986c32",
          "700": "#7c5520",
          "800": "#614113",
          "900": "#492f08",
          "950": "#321e02",
          "DEFAULT": "#986c32"
        },
        "accent-foreground": "#ffffff",
        "ring": "#986c32",
        "success": "#38894e",
        "warning": "#9e6a00",
        "danger": "#b2574e",
        "neutral": {
          "50": "#fff9f1",
          "100": "#f8f3eb",
          "200": "#e9e4dc",
          "300": "#d9d3cc",
          "400": "#a6a199",
          "500": "#77726b",
          "600": "#58534d",
          "700": "#433f39",
          "800": "#2a2620",
          "900": "#1a1711",
          "950": "#0d0a05",
          "DEFAULT": "#77726b"
        }
      },
      "fontFamily": {
        "display": [
          "\"Inter Tight\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"Inter Tight\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "xs": "0.6875rem",
        "sm": "0.875rem",
        "base": "0.9375rem",
        "lg": "1.25rem",
        "xl": "2.25rem",
        "2xl": "3rem",
        "3xl": "4.5rem",
        "4xl": "6.9375rem",
        "5xl": "19.125rem"
      },
      "spacing": {
        "1": "0.25rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "24": "6rem",
        "30": "7.5rem",
        "35": "8.75rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "4.5": "1.125rem",
        "7.5": "1.875rem",
        "9.5": "2.375rem",
        "11.5": "2.875rem"
      },
      "borderRadius": {
        "sm": "4px",
        "full": "9999px",
        "md": "9px",
        "lg": "12px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1380px"
      },
      "letterSpacing": {
        "display": "-0.02em",
        "heading": "-0.03em"
      },
      "lineHeight": {
        "display": "1.05",
        "body": "1.5"
      },
      "transitionDuration": {
        "DEFAULT": "550ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.215, 0.61, 0.355, 1)"
      }
    }
  }
};
