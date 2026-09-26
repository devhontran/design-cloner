// Design DNA "mat-voyce" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#fffdf8",
        "foreground": "#1f1f1f",
        "surface": "#00d3ff",
        "surface-foreground": "#1f1f1f",
        "muted": "#bcf3ff",
        "muted-foreground": "#797979",
        "border": "#1f1f1f",
        "primary": {
          "50": "#e6f9ff",
          "100": "#cbf2ff",
          "200": "#94e5ff",
          "300": "#00d3ff",
          "400": "#00b1d7",
          "500": "#0094b4",
          "600": "#007b96",
          "700": "#006379",
          "800": "#004d5f",
          "900": "#003947",
          "950": "#002631",
          "DEFAULT": "#00d3ff"
        },
        "primary-foreground": "#1f1f1f",
        "accent": {
          "50": "#f2ffcf",
          "100": "#dfff6b",
          "200": "#cbef00",
          "300": "#b4d400",
          "400": "#96b200",
          "500": "#7d9400",
          "600": "#677a00",
          "700": "#526200",
          "800": "#3f4c00",
          "900": "#2e3800",
          "950": "#1e2500",
          "DEFAULT": "#dfff6b"
        },
        "accent-foreground": "#1f1f1f",
        "ring": "#00d3ff",
        "success": "#56be72",
        "warning": "#d9951a",
        "danger": "#f27d72",
        "neutral": {
          "50": "#fdfaf1",
          "100": "#f7f3eb",
          "200": "#e8e4dc",
          "300": "#d7d4cc",
          "400": "#a4a199",
          "500": "#76736b",
          "600": "#57544d",
          "700": "#423f39",
          "800": "#292620",
          "900": "#191711",
          "950": "#0c0a05",
          "DEFAULT": "#76736b"
        }
      },
      "fontFamily": {
        "display": [
          "Anton",
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
        "base": "0.875rem",
        "lg": "0.875rem",
        "xl": "1.3125rem",
        "2xl": "2.25rem",
        "3xl": "3rem",
        "4xl": "8.4375rem",
        "5xl": "9.375rem",
        "6xl": "25.8125rem"
      },
      "spacing": {
        "1": "0.25rem",
        "3": "0.75rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "25": "6.25rem",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "10.5": "2.625rem",
        "11.5": "2.875rem",
        "41.5": "10.375rem"
      },
      "borderRadius": {
        "sm": "5px",
        "md": "50px",
        "full": "9999px"
      },
      "boxShadow": {
        "md": "rgba(31,31,31,1) 0px 0px 0px 0px"
      },
      "maxWidth": {
        "container": "920px"
      },
      "letterSpacing": {
        "display": "-0.02em",
        "heading": "-0.02em"
      },
      "lineHeight": {
        "display": "0.85",
        "body": "1.2"
      },
      "transitionDuration": {
        "DEFAULT": "800ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.165, 0.84, 0.44, 1)"
      }
    }
  }
};
