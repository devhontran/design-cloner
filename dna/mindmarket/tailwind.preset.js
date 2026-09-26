// Design DNA "mindmarket" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#f5f1e4",
        "foreground": "#2c2e2a",
        "surface": "#ffffff",
        "surface-foreground": "#2c2e2a",
        "muted": "#e0dbce",
        "muted-foreground": "#6b6d68",
        "border": "#e0dbce",
        "primary": {
          "50": "#edf9e7",
          "100": "#daf2ce",
          "200": "#b8e79e",
          "300": "#8ed462",
          "400": "#63b80e",
          "500": "#509b00",
          "600": "#428100",
          "700": "#346800",
          "800": "#275100",
          "900": "#1c3c00",
          "950": "#102900",
          "DEFAULT": "#8ed462"
        },
        "primary-foreground": "#2c2e2a",
        "accent": {
          "50": "#fefbd8",
          "100": "#faf3a9",
          "200": "#f5e211",
          "300": "#dac900",
          "400": "#b7a800",
          "500": "#988b00",
          "600": "#7d7300",
          "700": "#645b00",
          "800": "#4d4600",
          "900": "#393400",
          "950": "#262200",
          "DEFAULT": "#f5e211"
        },
        "accent-foreground": "#2c2e2a",
        "ring": "#2ba0ff",
        "success": "#35874c",
        "warning": "#9b6800",
        "danger": "#ff705d",
        "neutral": {
          "50": "#fdfaf1",
          "100": "#f6f3eb",
          "200": "#e7e4dc",
          "300": "#d7d4cc",
          "400": "#a4a199",
          "500": "#75736b",
          "600": "#56544d",
          "700": "#424039",
          "800": "#282620",
          "900": "#191711",
          "950": "#0c0a05",
          "DEFAULT": "#75736b"
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
        ]
      },
      "fontSize": {
        "2xs": "0.9375rem",
        "xs": "1.0625rem",
        "sm": "1.125rem",
        "base": "1.25rem",
        "lg": "1.875rem",
        "xl": "2.5625rem",
        "2xl": "3.3125rem",
        "3xl": "5.0625rem",
        "4xl": "8.75rem"
      },
      "spacing": {
        "3": "0.75rem",
        "11": "2.75rem",
        "15": "3.75rem",
        "64": "16rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "21.5": "5.375rem",
        "42.5": "10.625rem"
      },
      "borderRadius": {
        "sm": "10px",
        "md": "24px",
        "full": "9999px",
        "lg": "48px",
        "xl": "64px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1220px"
      },
      "letterSpacing": {
        "display": "-0.06em",
        "heading": "-0.06em"
      },
      "lineHeight": {
        "display": "0.95",
        "body": "1.25"
      },
      "transitionDuration": {
        "DEFAULT": "400ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.17, 0.67, 0.3, 1.33)"
      }
    }
  }
};
