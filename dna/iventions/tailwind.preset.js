// Design DNA "iventions" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#f3efeb",
        "foreground": "#1e1e1e",
        "surface": "#1e1e1e",
        "surface-foreground": "#f3efeb",
        "muted": "#eae3dc",
        "muted-foreground": "#737270",
        "border": "#1e1e1e",
        "primary": {
          "50": "#f4ffde",
          "100": "#e0ff98",
          "200": "#c4f300",
          "300": "#aed800",
          "400": "#91b400",
          "500": "#789600",
          "600": "#637c00",
          "700": "#4e6300",
          "800": "#3c4d00",
          "900": "#2c3900",
          "950": "#1c2600",
          "DEFAULT": "#e0ff98"
        },
        "primary-foreground": "#1e1e1e",
        "accent": {
          "50": "#f5f6ff",
          "100": "#ebecff",
          "200": "#d7d8ff",
          "300": "#bcbdff",
          "400": "#9b98ff",
          "500": "#8072ff",
          "600": "#6a57e2",
          "700": "#5441be",
          "800": "#403098",
          "900": "#2f2075",
          "950": "#1f1253",
          "DEFAULT": "#8072ff"
        },
        "accent-foreground": "#e0ff98",
        "ring": "#8072ff",
        "success": "#60bc77",
        "warning": "#d59734",
        "danger": "#ec8277",
        "neutral": {
          "50": "#fff9f3",
          "100": "#f9f2eb",
          "200": "#eae3dc",
          "300": "#dad3cc",
          "400": "#a7a09a",
          "500": "#78726c",
          "600": "#59534d",
          "700": "#443f39",
          "800": "#2a2520",
          "900": "#1b1611",
          "950": "#0e0905",
          "DEFAULT": "#78726c"
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
        "mono": [
          "Newsreader",
          "Georgia",
          "\"Times New Roman\"",
          "serif"
        ]
      },
      "fontSize": {
        "xs": "0.6875rem",
        "sm": "0.875rem",
        "base": "1.125rem",
        "lg": "1.6875rem",
        "xl": "2.25rem",
        "2xl": "3.75rem",
        "3xl": "7.5rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "6": "1.5rem",
        "15": "3.75rem",
        "38": "9.5rem",
        "56": "14rem",
        "0.5": "0.125rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "6.5": "1.625rem"
      },
      "borderRadius": {
        "sm": "4px",
        "md": "6px",
        "lg": "12px",
        "full": "9999px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1390px"
      },
      "letterSpacing": {
        "display": "-0.04em",
        "heading": "-0.03em"
      },
      "lineHeight": {
        "display": "0.85",
        "body": "1.4"
      },
      "transitionDuration": {
        "DEFAULT": "600ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.165, 0.84, 0.44, 1)"
      }
    }
  }
};
