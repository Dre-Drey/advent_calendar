import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { regardsFont } from "./fonts/regards/regards";
import { baskervilleFont } from "./fonts/baskerville/libreBaskerville";

import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  DEFAULT_THEME,
} from "@mantine/core";

export const metadata: Metadata = {
  title: "Calendrier de l'Avent 2024",
  description: "Calendrier de l'Avent 2024",
};

const theme = createTheme({
  fontFamily: baskervilleFont.style.fontFamily,
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: {
    fontFamily: `${regardsFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    sizes: {
      h1: {
        fontWeight: "100",
        fontSize: "rem(36)",
        lineHeight: "1.4",
      },
    },
  },
  primaryColor: "blue",
  primaryShade: 7,
  colors: {
    lightBeige: [
      "#f6f5f3",
      "#e9e9e9",
      "#d1d1cf",
      "#b9b7b1",
      "#a5a197",
      "#989386",
      "#928c7c",
      "#7f796a",
      "#716b5c",
      "#625c4b",
    ],
    beige: [
      "#f9f6eb",
      "#ece9e1",
      "#d5d1c6",
      "#bdb8a7",
      "#a9a28e",
      "#9c957d",
      "#968e73",
      "#827b61",
      "#746d53",
      "#655e43",
    ],
    blue: [
      "#e8f2ff",
      "#d1e1fe",
      "#a3c0f8",
      "#719df3",
      "#4880ee",
      "#2e6dec",
      "#1f64ec",
      "#1053d3",
      "#034abd",
      "#003fa8",
    ],
  },
  shadows: {},
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
