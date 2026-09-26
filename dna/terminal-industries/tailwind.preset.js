// Design DNA "terminal-industries" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#ffffff",
        "foreground": "#052424",
        "surface": "#f0f0f0",
        "surface-foreground": "#052424",
        "muted": "#f0f0f0",
        "muted-foreground": "#4c6161",
        "border": "#cdd1d1",
        "primary": {
          "50": "#f5ffec",
          "100": "#dfffc0",
          "200": "#abff02",
          "300": "#97e200",
          "400": "#7ebd00",
          "500": "#679d00",
          "600": "#548100",
          "700": "#426600",
          "800": "#324f00",
          "900": "#243b00",
          "950": "#172700",
          "DEFAULT": "#abff02"
        },
        "primary-foreground": "#052424",
        "accent": {
          "50": "#f1f8f8",
          "100": "#e1f0f0",
          "200": "#c3e2e1",
          "300": "#9ecdcc",
          "400": "#76afaf",
          "500": "#559494",
          "600": "#3c7b7b",
          "700": "#296362",
          "800": "#1b4c4c",
          "900": "#0f3737",
          "950": "#052424",
          "DEFAULT": "#052424"
        },
        "accent-foreground": "#ffffff",
        "ring": "#abff02",
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
        "ui": [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "mono": [
          "\"Geist Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
        "2xs": "0.875rem",
        "xs": "0.9375rem",
        "sm": "1rem",
        "base": "1.125rem",
        "lg": "1.25rem",
        "xl": "1.4375rem",
        "2xl": "2.1875rem",
        "3xl": "2.375rem",
        "4xl": "2.875rem",
        "5xl": "4.375rem",
        "6xl": "5.1875rem"
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "15": "3.75rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "9.5": "2.375rem"
      },
      "borderRadius": {
        "sm": "8px",
        "md": "12px",
        "lg": "20px",
        "xl": "24px",
        "full": "9999px"
      },
      "boxShadow": {
        "sm": "rgba(255,255,255,0.06) 0px 1px 0px 0px inset, rgba(0,0,0,0.25) 0px 40px 80px 0px",
        "lg": "rgba(0, 0, 0, 0) 0px 0px 0px 0px"
      },
      "maxWidth": {
        "container": "1300px"
      },
      "letterSpacing": {
        "display": "-0.051em",
        "heading": "-0.018em"
      },
      "lineHeight": {
        "display": "0.95",
        "body": "1.4"
      },
      "transitionDuration": {
        "DEFAULT": "400ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      }
    }
  }
};
