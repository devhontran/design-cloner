// Design DNA "era-residence" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#f3f3ec",
        "foreground": "#17233b",
        "surface": "#ffffff",
        "surface-foreground": "#17233b",
        "muted": "#e4e4dd",
        "muted-foreground": "#5d6574",
        "border": "#17233b",
        "primary": {
          "50": "#fff3f9",
          "100": "#fee5f1",
          "200": "#fccae3",
          "300": "#f2a9cf",
          "400": "#d983b1",
          "500": "#bf6497",
          "600": "#a34c7e",
          "700": "#853764",
          "800": "#68274d",
          "900": "#4d1938",
          "950": "#340c24",
          "DEFAULT": "#340c24"
        },
        "primary-foreground": "#f3f3ec",
        "accent": {
          "50": "#f6fafd",
          "100": "#eaf3f7",
          "200": "#d3e4ec",
          "300": "#b5cedb",
          "400": "#90aebd",
          "500": "#7191a1",
          "600": "#597888",
          "700": "#435f6d",
          "800": "#324954",
          "900": "#23363f",
          "950": "#15242b",
          "DEFAULT": "#b5cedb"
        },
        "accent-foreground": "#17233b",
        "ring": "#17233b",
        "success": "#287c42",
        "warning": "#8d5e00",
        "danger": "#a34942",
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
          "\"Bodoni Moda\"",
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
        ]
      },
      "fontSize": {
        "xs": "0.625rem",
        "sm": "0.75rem",
        "base": "1rem",
        "lg": "1.4375rem",
        "xl": "1.5625rem",
        "2xl": "2.25rem",
        "3xl": "3.5625rem",
        "4xl": "5.4375rem",
        "5xl": "6.75rem",
        "6xl": "7.6875rem",
        "7xl": "10.8125rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "11": "2.75rem",
        "0.5": "0.125rem",
        "3.5": "0.875rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem",
        "15.5": "3.875rem",
        "34.5": "8.625rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "full": "9999px",
        "lg": "0px"
      },
      "boxShadow": {
        "md": "rgba(0, 0, 0, 0) 0px 224px 63px 0px, rgba(0,0,0,0.01) 0px 143px 57px 0px, rgba(0,0,0,0.04) 0px 81px 48px 0px, rgba(0,0,0,0.07) 0px 36px 36px 0px, rgba(0,0,0,0.08) 0px 9px 20px 0px"
      },
      "maxWidth": {
        "container": "1350px"
      },
      "letterSpacing": {
        "display": "-0.01em",
        "heading": "-0.024em"
      },
      "lineHeight": {
        "display": "1.15",
        "body": "1.5"
      },
      "transitionDuration": {
        "DEFAULT": "400ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 1, 0.5, 1)"
      }
    }
  }
};
