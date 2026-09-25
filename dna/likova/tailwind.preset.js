// Design DNA "likova" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#070b20",
        "foreground": "#ffffff",
        "surface": "#232739",
        "surface-foreground": "#ffffff",
        "muted": "#11162d",
        "muted-foreground": "#bdbec4",
        "border": "#393c4d",
        "primary": {
          "50": "#ffffff",
          "100": "#f3f3f3",
          "200": "#dfdfdf",
          "300": "#c5c5c5",
          "400": "#a4a4a4",
          "500": "#878787",
          "600": "#707070",
          "700": "#595959",
          "800": "#454545",
          "900": "#333333",
          "950": "#222222",
          "DEFAULT": "#ffffff"
        },
        "primary-foreground": "#070b20",
        "accent": {
          "50": "#fafafc",
          "100": "#f1f2f5",
          "200": "#dfe2e8",
          "300": "#c7cbd4",
          "400": "#a5aab4",
          "500": "#878c98",
          "600": "#6e737e",
          "700": "#575b64",
          "800": "#41454d",
          "900": "#303339",
          "950": "#1f2226",
          "DEFAULT": "#c7cbd4"
        },
        "accent-foreground": "#070b20",
        "ring": "#ffffff",
        "success": "#287c42",
        "warning": "#8d5e00",
        "danger": "#ce1d20",
        "neutral": {
          "50": "#f8faff",
          "100": "#f0f3fc",
          "200": "#e1e4ed",
          "300": "#d1d4dc",
          "400": "#9fa1a9",
          "500": "#70737a",
          "600": "#51545b",
          "700": "#3d3f46",
          "800": "#24262c",
          "900": "#15171d",
          "950": "#080a0f",
          "DEFAULT": "#70737a"
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
        "sm": "0.6875rem",
        "base": "0.875rem",
        "lg": "1.25rem",
        "xl": "3.125rem",
        "2xl": "5.3125rem",
        "3xl": "8.9375rem"
      },
      "spacing": {
        "5": "1.25rem",
        "10": "2.5rem",
        "15": "3.75rem",
        "30": "7.5rem",
        "60": "15rem",
        "0.75": "0.1875rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "7.5": "1.875rem",
        "11.5": "2.875rem"
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
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "1.05",
        "body": "1.29"
      },
      "transitionDuration": {
        "DEFAULT": "500ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.7, 0, 0.3, 1)"
      }
    }
  }
};
