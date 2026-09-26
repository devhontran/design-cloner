// Design DNA "zentry" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#dfdff2",
        "foreground": "#000000",
        "surface": "#000000",
        "surface-foreground": "#dfdff2",
        "muted": "#b2b2c2",
        "muted-foreground": "#676666",
        "border": "#000000",
        "primary": {
          "50": "#f4f6ff",
          "100": "#e8ecff",
          "200": "#d0d7ff",
          "300": "#b1bcff",
          "400": "#8a95ff",
          "500": "#6b6fff",
          "600": "#5542ff",
          "700": "#442bd8",
          "800": "#341caf",
          "900": "#260f89",
          "950": "#190563",
          "DEFAULT": "#5542ff"
        },
        "primary-foreground": "#dfdff2",
        "accent": {
          "50": "#f8ffda",
          "100": "#edff66",
          "200": "#daed00",
          "300": "#c1d200",
          "400": "#a2b000",
          "500": "#869200",
          "600": "#6e7800",
          "700": "#586000",
          "800": "#444a00",
          "900": "#323700",
          "950": "#212500",
          "DEFAULT": "#edff66"
        },
        "accent-foreground": "#000000",
        "ring": "#5542ff",
        "success": "#007f38",
        "warning": "#8d5e00",
        "danger": "#c11a1e",
        "neutral": {
          "50": "#f9f9ff",
          "100": "#f2f2fb",
          "200": "#e3e4ec",
          "300": "#d3d3dc",
          "400": "#a0a1a9",
          "500": "#72727a",
          "600": "#53535a",
          "700": "#3f3f46",
          "800": "#26262c",
          "900": "#17161d",
          "950": "#0a090f",
          "DEFAULT": "#72727a"
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
          "\"Roboto Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ],
        "mono": [
          "\"Roboto Mono\"",
          "ui-monospace",
          "\"SFMono-Regular\"",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
        "2xs": "0.8125rem",
        "xs": "0.875rem",
        "sm": "0.9375rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.6875rem",
        "2xl": "3.1875rem",
        "3xl": "3.625rem",
        "4xl": "5.625rem",
        "5xl": "6rem",
        "6xl": "6.75rem",
        "7xl": "7.875rem",
        "8xl": "10.125rem",
        "9xl": "11.25rem"
      },
      "spacing": {
        "2": "0.5rem",
        "6": "1.5rem",
        "9": "2.25rem",
        "34": "8.5rem",
        "1.5": "0.375rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "11.5": "2.875rem",
        "14.5": "3.625rem"
      },
      "borderRadius": {
        "sm": "7px",
        "full": "9999px",
        "md": "12px",
        "lg": "24px"
      },
      "boxShadow": {},
      "maxWidth": {
        "container": "1350px"
      },
      "letterSpacing": {
        "display": "-0.01em",
        "heading": "-0.01em"
      },
      "lineHeight": {
        "display": "0.82",
        "body": "1.4"
      },
      "transitionDuration": {
        "DEFAULT": "500ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      }
    }
  }
};
