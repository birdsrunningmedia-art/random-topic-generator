import localFont from "next/font/local";

export const sora = localFont({
  src: [
    { path: "../public/fonts/Sora/Sora-Thin.woff2", weight: "100", style: "normal" },
    { path: "../public/fonts/Sora/Sora-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../public/fonts/Sora/Sora-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Sora/Sora-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Sora/Sora-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Sora/Sora-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Sora/Sora-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Sora/Sora-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
});
