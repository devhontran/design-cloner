// Design DNA "huyml" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#ececec",
        "foreground": "#181818",
        "surface": "#ffffff",
        "surface-foreground": "#181818",
        "muted": "#d4d4d4",
        "muted-foreground": "#8b8b8b",
        "border": "#181818",
        "primary": {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dbdbdb",
          "300": "#c2c2c2",
          "400": "#a3a3a3",
          "500": "#878787",
          "600": "#6e6e6e",
          "700": "#555555",
          "800": "#3e3e3e",
          "900": "#2b2b2b",
          "950": "#181818",
          "DEFAULT": "#181818"
        },
        "primary-foreground": "#ececec",
        "accent": {
          "50": "#e7ffba",
          "100": "#ceff45",
          "200": "#bcee00",
          "300": "#a7d400",
          "400": "#8cb200",
          "500": "#759500",
          "600": "#617c00",
          "700": "#4d6300",
          "800": "#3b4d00",
          "900": "#2b3900",
          "950": "#1c2600",
          "DEFAULT": "#ceff45"
        },
        "accent-foreground": "#181818",
        "ring": "#181818",
        "success": "#46975b",
        "warning": "#ad771b",
        "danger": "#c1645b",
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
          "Archivo",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "Archivo",
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
        ],
        "mono": [
          "\"Instrument Serif\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "sm": "0.625rem",
        "base": "1rem",
        "lg": "1.1875rem",
        "xl": "1.4375rem",
        "2xl": "11.25rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "22": "5.5rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "4.5": "1.125rem",
        "7.5": "1.875rem"
      },
      "borderRadius": {
        "sm": "0px",
        "full": "9999px",
        "md": "0px",
        "lg": "8px"
      },
      "boxShadow": {
        "md": "rgba(0,0,0,0.23) -2px 4px 4px 0px"
      },
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "-0.03em",
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "0.85",
        "body": "1.2"
      },
      "transitionDuration": {
        "DEFAULT": "320ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      }
    }
  }
};
