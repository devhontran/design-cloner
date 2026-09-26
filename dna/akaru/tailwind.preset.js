// Design DNA "akaru" — Tailwind CSS v3 preset. Usage: presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "background": "#f1efeb",
        "foreground": "#0e0e0e",
        "surface": "#0e0e0e",
        "surface-foreground": "#ffffff",
        "muted": "#bfccd8",
        "muted-foreground": "#6b6b6b",
        "border": "#0e0e0e",
        "primary": {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dbdbdb",
          "300": "#c2c2c2",
          "400": "#a3a3a3",
          "500": "#878787",
          "600": "#6b6b6b",
          "700": "#505050",
          "800": "#373737",
          "900": "#222222",
          "950": "#0e0e0e",
          "DEFAULT": "#0e0e0e"
        },
        "primary-foreground": "#ffffff",
        "accent": {
          "50": "#fff6f2",
          "100": "#ffebe1",
          "200": "#ffd5bf",
          "300": "#fab691",
          "400": "#e49366",
          "500": "#c97342",
          "600": "#ad5a27",
          "700": "#8d4413",
          "800": "#6f3207",
          "900": "#542200",
          "950": "#3a1500",
          "DEFAULT": "#e49366"
        },
        "accent-foreground": "#0e0e0e",
        "ring": "#e49366",
        "success": "#008c3f",
        "warning": "#9d6900",
        "danger": "#d02c2b",
        "neutral": {
          "50": "#fefaf1",
          "100": "#f7f3eb",
          "200": "#e8e4dc",
          "300": "#d8d4cc",
          "400": "#a5a199",
          "500": "#76736b",
          "600": "#57534d",
          "700": "#433f39",
          "800": "#292620",
          "900": "#1a1711",
          "950": "#0c0a05",
          "DEFAULT": "#76736b"
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
          "Newsreader",
          "Georgia",
          "\"Times New Roman\"",
          "serif"
        ],
        "mono": [
          "\"Big Shoulders Display\"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      "fontSize": {
        "2xs": "0.625rem",
        "xs": "0.75rem",
        "sm": "1rem",
        "base": "1.125rem",
        "lg": "1.25rem",
        "xl": "2rem",
        "2xl": "3.375rem",
        "3xl": "4rem",
        "4xl": "4.5rem",
        "5xl": "6rem"
      },
      "spacing": {
        "2": "0.5rem",
        "5": "1.25rem",
        "10": "2.5rem",
        "40": "10rem",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem",
        "32.5": "8.125rem"
      },
      "borderRadius": {
        "sm": "4px",
        "full": "9999px",
        "md": "14px",
        "lg": "24px"
      },
      "boxShadow": {
        "md": "rgba(14,14,14,1) 0px 0px 0px 0.999994px inset"
      },
      "maxWidth": {
        "container": "1120px"
      },
      "letterSpacing": {
        "display": "-0.03em",
        "heading": "-0.03em"
      },
      "lineHeight": {
        "display": "1",
        "body": "1.5"
      },
      "transitionDuration": {
        "DEFAULT": "300ms"
      },
      "transitionTimingFunction": {
        "brand": "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
      }
    }
  }
};
