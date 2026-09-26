// Design DNA "ponpon-mania" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#7d7dfd",
        "foreground": "#171717",
        "surface": "#171717",
        "surface-foreground": "#feece3",
        "muted": "#3b3b3b",
        "muted-foreground": "#a29791",
        "border": "#171717",
        "primary": {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dbdbdb",
          "300": "#c2c2c2",
          "400": "#a3a3a3",
          "500": "#878787",
          "600": "#6d6d6d",
          "700": "#545454",
          "800": "#3e3e3e",
          "900": "#2a2a2a",
          "950": "#171717",
          "DEFAULT": "#171717"
        },
        "primary-foreground": "#ffffff",
        "accent": {
          "50": "#fff4e6",
          "100": "#ffe8c9",
          "200": "#ffd190",
          "300": "#fdaf22",
          "400": "#d79200",
          "500": "#b47900",
          "600": "#966400",
          "700": "#785000",
          "800": "#5e3d00",
          "900": "#472d00",
          "950": "#301d00",
          "DEFAULT": "#fdaf22"
        },
        "accent-foreground": "#171717",
        "ring": "#f191ba",
        "success": "#00ad4f",
        "warning": "#c08100",
        "danger": "#e74f1f",
        "neutral": {
          "50": "#f9faff",
          "100": "#f2f3fc",
          "200": "#e3e4ed",
          "300": "#d2d3dc",
          "400": "#a0a1a9",
          "500": "#71727a",
          "600": "#52535b",
          "700": "#3e3f46",
          "800": "#25262c",
          "900": "#16171d",
          "950": "#090a0f",
          "DEFAULT": "#71727a"
        }
      },
      "fontFamily": {
        "display": [
          "\"Libre Franklin\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"Libre Franklin\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "sm": "0.625rem",
        "base": "0.8125rem",
        "lg": "0.9375rem",
        "xl": "2.1875rem"
      },
      "spacing": {
        "3": "0.75rem",
        "5": "1.25rem",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "3.5": "0.875rem",
        "6.5": "1.625rem"
      },
      "borderRadius": {
        "sm": "9999px",
        "md": "9999px",
        "lg": "24px",
        "full": "9999px"
      },
      "boxShadow": {
        "md": "rgba(0,0,0,0.1) 0px -2px 10px 0px"
      },
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "-0.02em",
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "0.8",
        "body": "1.5"
      },
      "transitionDuration": {
        "DEFAULT": "100ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      }
    }
  }
};
