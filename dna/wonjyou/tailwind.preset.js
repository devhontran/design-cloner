// Design DNA "wonjyou" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#0a0a0a",
        "foreground": "#fee9ce",
        "surface": "#fee9ce",
        "surface-foreground": "#ef5143",
        "muted": "#151515",
        "muted-foreground": "#4e4e4e",
        "border": "#1d1d1d",
        "primary": {
          "50": "#fff4f2",
          "100": "#ffe9e5",
          "200": "#ffd2cb",
          "300": "#ffb0a4",
          "400": "#ff7c6c",
          "500": "#ef5143",
          "600": "#d03228",
          "700": "#ac1a15",
          "800": "#890a08",
          "900": "#680001",
          "950": "#470000",
          "DEFAULT": "#ef5143"
        },
        "primary-foreground": "#0a0a0a",
        "accent": {
          "50": "#fff6ed",
          "100": "#ffead7",
          "200": "#ffd3a9",
          "300": "#ffb261",
          "400": "#e78c00",
          "500": "#c17400",
          "600": "#a05f00",
          "700": "#814b00",
          "800": "#643900",
          "900": "#4b2a00",
          "950": "#341b00",
          "DEFAULT": "#ffb261"
        },
        "accent-foreground": "#0a0a0a",
        "ring": "#ffb261",
        "success": "#00ac4f",
        "warning": "#bf8100",
        "danger": "#ef5048",
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
          "\"Plus Jakarta Sans\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"Plus Jakarta Sans\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "2xs": "0.75rem",
        "xs": "0.875rem",
        "sm": "0.9375rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.3125rem",
        "2xl": "2.0625rem",
        "3xl": "5.0625rem",
        "4xl": "12.1875rem",
        "5xl": "17.625rem"
      },
      "spacing": {
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "6": "1.5rem",
        "9": "2.25rem",
        "15": "3.75rem",
        "0.75": "0.1875rem",
        "1.5": "0.375rem",
        "4.5": "1.125rem",
        "11.5": "2.875rem",
        "17.5": "4.375rem",
        "24.5": "6.125rem",
        "30.5": "7.625rem",
        "47.5": "11.875rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "full": "9999px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "930px"
      },
      "letterSpacing": {
        "display": "-0.04em",
        "heading": "-0.04em"
      },
      "lineHeight": {
        "display": "0.92",
        "body": "1.3"
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
