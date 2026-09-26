// Design DNA "floema" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#f2efea",
        "foreground": "#241f21",
        "surface": "#ffffff",
        "surface-foreground": "#241f21",
        "muted": "#e7e3dc",
        "muted-foreground": "#8b8786",
        "border": "#241f21",
        "primary": {
          "50": "#fcfce4",
          "100": "#f5f5c2",
          "200": "#e9e778",
          "300": "#d3ce00",
          "400": "#b1ac00",
          "500": "#928f00",
          "600": "#787500",
          "700": "#5f5d00",
          "800": "#4a4800",
          "900": "#373500",
          "950": "#242300",
          "DEFAULT": "#e9e778"
        },
        "primary-foreground": "#241f21",
        "accent": {
          "50": "#f0f9f8",
          "100": "#dff1f0",
          "200": "#bee4e0",
          "300": "#96cfcb",
          "400": "#6ab2ad",
          "500": "#479792",
          "600": "#2d807b",
          "700": "#1b6965",
          "800": "#105350",
          "900": "#08403d",
          "950": "#042d2b",
          "DEFAULT": "#042d2b"
        },
        "accent-foreground": "#e9e778",
        "ring": "#241f21",
        "success": "#60bc77",
        "warning": "#d59732",
        "danger": "#ed8176",
        "neutral": {
          "50": "#fef9f1",
          "100": "#f8f3eb",
          "200": "#e9e4dc",
          "300": "#d8d4cc",
          "400": "#a5a199",
          "500": "#77726b",
          "600": "#57534d",
          "700": "#433f39",
          "800": "#292620",
          "900": "#1a1711",
          "950": "#0d0a05",
          "DEFAULT": "#77726b"
        }
      },
      "fontFamily": {
        "display": [
          "Figtree",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "Figtree",
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
        ]
      },
      "fontSize": {
        "sm": "0.75rem",
        "base": "0.875rem",
        "lg": "0.9375rem",
        "xl": "1rem",
        "2xl": "1.125rem",
        "3xl": "1.1875rem",
        "4xl": "1.4375rem",
        "5xl": "2.75rem",
        "6xl": "3.1875rem",
        "7xl": "3.5625rem"
      },
      "spacing": {
        "1": "0.25rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "6.5": "1.625rem",
        "11.5": "2.875rem"
      },
      "borderRadius": {
        "sm": "4px",
        "full": "9999px",
        "md": "8px",
        "lg": "12px"
      },
      "boxShadow": {
        "md": "rgba(0,0,0,0.15) 0px 4px 16px 0px"
      },
      "maxWidth": {
        "container": "1200px"
      },
      "letterSpacing": {
        "display": "-0.04em",
        "heading": "-0.04em"
      },
      "lineHeight": {
        "display": "1.05",
        "body": "1.4"
      },
      "transitionDuration": {
        "DEFAULT": "500ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.19, 1, 0.22, 1)"
      }
    }
  }
};
