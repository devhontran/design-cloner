// Design DNA "montfort" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#e5ecf1",
        "foreground": "#2d628c",
        "surface": "#ffffff",
        "surface-foreground": "#161616",
        "muted": "#d5dee6",
        "muted-foreground": "#81a0bb",
        "border": "#81a0bb",
        "primary": {
          "50": "#f1f8fe",
          "100": "#e0effc",
          "200": "#c1dff9",
          "300": "#9dc9f0",
          "400": "#75abd9",
          "500": "#5590c1",
          "600": "#3e79a8",
          "700": "#2d628c",
          "800": "#1f4c6f",
          "900": "#133854",
          "950": "#09253b",
          "DEFAULT": "#2d628c"
        },
        "primary-foreground": "#ffffff",
        "accent": {
          "50": "#f3f7fb",
          "100": "#e5eef6",
          "200": "#ccddee",
          "300": "#adc6de",
          "400": "#89a7c4",
          "500": "#6c8baa",
          "600": "#53728f",
          "700": "#3e5973",
          "800": "#2d4359",
          "900": "#1d3041",
          "950": "#0f1d2a",
          "DEFAULT": "#0f1d2a"
        },
        "accent-foreground": "#ffffff",
        "ring": "#2d628c",
        "success": "#287c42",
        "warning": "#8d5e00",
        "danger": "#a34942",
        "neutral": {
          "50": "#f5fbff",
          "100": "#ecf5fb",
          "200": "#dee6ec",
          "300": "#cdd5db",
          "400": "#9ba3a8",
          "500": "#6d7479",
          "600": "#4e555a",
          "700": "#3a4145",
          "800": "#21272c",
          "900": "#12181c",
          "950": "#060b0f",
          "DEFAULT": "#6d7479"
        }
      },
      "fontFamily": {
        "display": [
          "\"Josefin Sans\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "sans": [
          "\"Josefin Sans\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        "ui": [
          "\"Josefin Sans\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "sm": "0.75rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "2.5rem",
        "3xl": "3.125rem",
        "4xl": "3.875rem"
      },
      "spacing": {
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
        "12": "3rem",
        "13": "3.25rem",
        "20": "5rem",
        "40": "10rem",
        "60": "15rem",
        "0.75": "0.1875rem",
        "18.5": "4.625rem"
      },
      "borderRadius": {
        "sm": "0px",
        "md": "0px",
        "full": "9999px",
        "lg": "0px"
      },
      "boxShadow": {
        "md": "rgba(255,255,255,1) 0px 0px 12px 0px"
      },
      "maxWidth": {
        "container": "1380px"
      },
      "letterSpacing": {
        "display": "0.045em",
        "heading": "0.045em"
      },
      "lineHeight": {
        "display": "1.4",
        "body": "1.6"
      },
      "transitionDuration": {
        "DEFAULT": "1200ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.65, 0, 0.35, 1)"
      }
    }
  }
};
