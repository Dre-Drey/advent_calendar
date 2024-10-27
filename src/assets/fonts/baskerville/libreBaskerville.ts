import localFont from "next/font/local";

export const baskervilleFont = localFont({
  src: [
    {
      path: "./LibreBaskerville-Regular.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./LibreBaskerville-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./LibreBaskerville-Bold.ttf",
      weight: "900",
      style: "bold",
    },
  ],
});
