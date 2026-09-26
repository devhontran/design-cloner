// Design DNA "the-line-studio" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#f8f8f8",
        "foreground": "#0b0b0b",
        "surface": "#dddee2",
        "surface-foreground": "#0b0b0b",
        "muted": "#dddee2",
        "muted-foreground": "#5f5f61",
        "border": "#0b0b0b",
        "primary": {
          "50": "#fff4f2",
          "100": "#ffe9e4",
          "200": "#ffd2c9",
          "300": "#ffb1a2",
          "400": "#ff7d68",
          "500": "#ff391e",
          "600": "#da1e00",
          "700": "#af1600",
          "800": "#880e00",
          "900": "#660800",
          "950": "#460300",
          "DEFAULT": "#ff391e"
        },
        "primary-foreground": "#0b0b0b",
        "accent": {
          "50": "#fff4f2",
          "100": "#ffe6e2",
          "200": "#ffcfc7",
          "300": "#ffac9f",
          "400": "#ff7765",
          "500": "#f93628",
          "600": "#dd0000",
          "700": "#b20000",
          "800": "#8c0000",
          "900": "#690000",
          "950": "#490000",
          "DEFAULT": "#dd0000"
        },
        "accent-foreground": "#f8f8f8",
        "ring": "#ff391e",
        "success": "#008d40",
        "warning": "#9e6900",
        "danger": "#d12e2c",
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
        ],
        "mono": [
          "\"Archivo Black\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "sm": "0.625rem",
        "base": "0.875rem",
        "lg": "0.875rem",
        "xl": "1.0625rem",
        "2xl": "1.1875rem",
        "3xl": "1.5rem",
        "4xl": "1.6875rem",
        "5xl": "2.125rem",
        "6xl": "3.375rem",
        "7xl": "5rem",
        "8xl": "6.6875rem",
        "9xl": "10.9375rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "0.5": "0.125rem",
        "3.5": "0.875rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "23.5": "5.875rem",
        "44.5": "11.125rem"
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
        "display": "-0.04em",
        "heading": "-0.04em"
      },
      "lineHeight": {
        "display": "0.8",
        "body": "1.1"
      },
      "transitionDuration": {
        "DEFAULT": "600ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.19, 1, 0.22, 1)"
      }
    }
  }
};
