// Design DNA "shopify-renaissance" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#dcdcd0",
        "foreground": "#0c0c08",
        "surface": "#f7f7ee",
        "surface-foreground": "#ffffff",
        "muted": "#cfcfc2",
        "muted-foreground": "#5c5c4e",
        "border": "#b8b8ae",
        "primary": {
          "50": "#f7f7f5",
          "100": "#ededea",
          "200": "#dbdbd5",
          "300": "#c3c3bb",
          "400": "#a4a49a",
          "500": "#88887e",
          "600": "#6b6b61",
          "700": "#4f4f47",
          "800": "#36362f",
          "900": "#20201a",
          "950": "#0c0c08",
          "DEFAULT": "#0c0c08"
        },
        "primary-foreground": "#f7f7ee",
        "accent": {
          "50": "#f6f6ff",
          "100": "#e9e7ff",
          "200": "#d4d0ff",
          "300": "#b9afff",
          "400": "#9982ff",
          "500": "#8051ff",
          "600": "#6d36e5",
          "700": "#5922c2",
          "800": "#46169e",
          "900": "#350c7c",
          "950": "#25055b",
          "DEFAULT": "#8051ff"
        },
        "accent-foreground": "#ffffff",
        "ring": "#8051ff",
        "success": "#009644",
        "warning": "#a77000",
        "danger": "#da3733",
        "neutral": {
          "50": "#fbfbf2",
          "100": "#f4f4eb",
          "200": "#e5e5dc",
          "300": "#d5d5cc",
          "400": "#a2a29a",
          "500": "#74746c",
          "600": "#54544d",
          "700": "#404039",
          "800": "#272720",
          "900": "#181811",
          "950": "#0b0a05",
          "DEFAULT": "#74746c"
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
          "Newsreader",
          "Georgia",
          "\"Times New Roman\"",
          "serif"
        ],
        "ui": [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "mono": [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "sm": "0.6875rem",
        "base": "0.875rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.75rem",
        "5xl": "3.875rem",
        "6xl": "12.125rem"
      },
      "spacing": {
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "10": "2.5rem",
        "16": "4rem",
        "0.75": "0.1875rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "7.5": "1.875rem"
      },
      "borderRadius": {
        "sm": "2px",
        "md": "6px",
        "lg": "12px",
        "xl": "8px",
        "2xl": "12px",
        "full": "9999px"
      },
      "boxShadow": {
        "md": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0,0,0,0.13) 3px 6px 12px 0px"
      },
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "-0.03em",
        "heading": "-0.02em"
      },
      "lineHeight": {
        "display": "0.9",
        "body": "1.1"
      },
      "transitionDuration": {
        "DEFAULT": "150ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  }
};
