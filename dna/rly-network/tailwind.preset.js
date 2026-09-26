// Design DNA "rly-network" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#121212",
        "foreground": "#ffffff",
        "surface": "#1a1a1a",
        "surface-foreground": "#ffffff",
        "muted": "#272727",
        "muted-foreground": "#909090",
        "border": "#272727",
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
        "primary-foreground": "#121212",
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
        "accent-foreground": "#121212",
        "ring": "#ceff45",
        "success": "#00c55b",
        "warning": "#db9400",
        "danger": "#ff7266",
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
          "Urbanist",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "Urbanist",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "xs": "0.6875rem",
        "sm": "0.75rem",
        "base": "0.9375rem",
        "lg": "1.5rem",
        "xl": "1.875rem",
        "2xl": "2.25rem",
        "3xl": "3rem",
        "4xl": "4.25rem"
      },
      "spacing": {
        "3": "0.75rem",
        "4": "1rem",
        "6": "1.5rem",
        "10": "2.5rem",
        "12": "3rem",
        "14": "3.5rem",
        "0.75": "0.1875rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem",
        "10.5": "2.625rem",
        "13.5": "3.375rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "full": "9999px",
        "lg": "0px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "-0.03em",
        "heading": "-0.03em"
      },
      "lineHeight": {
        "display": "1.05",
        "body": "1.3"
      },
      "transitionDuration": {
        "DEFAULT": "300ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.85, 0, 0.15, 1)"
      }
    }
  }
};
