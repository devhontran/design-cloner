// Design DNA "kriss-ai" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#e9dfe1",
        "foreground": "#0f0f0f",
        "surface": "#f4efef",
        "surface-foreground": "#000000",
        "muted": "#ded2d5",
        "muted-foreground": "#5a5557",
        "border": "#ffffff",
        "primary": {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dbdbdb",
          "300": "#c2c2c2",
          "400": "#a3a3a3",
          "500": "#878787",
          "600": "#6b6b6b",
          "700": "#505050",
          "800": "#383838",
          "900": "#232323",
          "950": "#0f0f0f",
          "DEFAULT": "#0f0f0f"
        },
        "primary-foreground": "#ffffff",
        "accent": {
          "50": "#f6f1f9",
          "100": "#eee4f3",
          "200": "#e0cce9",
          "300": "#cbaed9",
          "400": "#b08dc1",
          "500": "#9772a9",
          "600": "#815d91",
          "700": "#694978",
          "800": "#533960",
          "900": "#3e2948",
          "950": "#2a1a32",
          "DEFAULT": "#cbaed9"
        },
        "accent-foreground": "#0f0f0f",
        "ring": "#0f0f0f",
        "success": "#287c42",
        "warning": "#8d5e00",
        "danger": "#a34942",
        "neutral": {
          "50": "#fff8f9",
          "100": "#fbf0f2",
          "200": "#ece1e4",
          "300": "#dcd1d3",
          "400": "#a99fa1",
          "500": "#7a7072",
          "600": "#5a5153",
          "700": "#463d3f",
          "800": "#2c2426",
          "900": "#1c1517",
          "950": "#0f080a",
          "DEFAULT": "#7a7072"
        }
      },
      "fontFamily": {
        "display": [
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "Manrope",
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
        "lg": "1.5rem",
        "xl": "3.75rem"
      },
      "spacing": {
        "2": "0.5rem",
        "4": "1rem",
        "5": "1.25rem",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "7.5": "1.875rem",
        "12.5": "3.125rem"
      },
      "borderRadius": {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "full": "9999px"
      },
      "boxShadow": {
        "md": "rgba(64,179,166,0.08) 10px 10px 40px 0px, rgba(66,181,165,0.12) 5px 14px 80px 0px"
      },
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "-0.02em",
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "1.1",
        "body": "1.4"
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
