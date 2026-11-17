import localFont from "next/font/local";

export const haffer = localFont({
   src: [
      {
         path: "./fonts/Haffer-TRIAL-Thin.woff2",
         weight: "100",
         style: "normal",
      },
      {
         path: "./fonts/Haffer-TRIAL-Light.woff2",
         weight: "300",
         style: "normal",
      },
      {
         path: "./fonts/Haffer-TRIAL-Regular.woff2",
         weight: "400",
         style: "normal",
      },
      {
         path: "./fonts/Haffer-TRIAL-Medium.woff2",
         weight: "500",
         style: "normal",
      },
      {
         path: "./fonts/Haffer-TRIAL-SemiBold.woff2",
         weight: "600",
         style: "normal",
      },
      {
         path: "./fonts/Haffer-TRIAL-Bold.woff2",
         weight: "700",
         style: "normal",
      },
   ],
   variable: "--font-haffer",
   display: "swap",
});

export const ofform = localFont({
   src: "./fonts/Ofform-TRIAL-Regular.woff2",
   weight: "400",
   style: "normal",
   variable: "--font-ofform",
   display: "swap",
});

export const panell = localFont({
   src: [
      {
         path: "./fonts/PanellNarrow-TRIAL-Regular.woff2",
         weight: "400",
         style: "normal",
      },
      {
         path: "./fonts/PanellNarrow-TRIAL-Medium.woff2",
         weight: "500",
         style: "normal",
      },
      {
         path: "./fonts/PanellNarrow-TRIAL-SemiBold.woff2",
         weight: "600",
         style: "normal",
      },
      {
         path: "./fonts/PanellNarrow-TRIAL-Bold.woff2",
         weight: "700",
         style: "normal",
      },
   ],
   variable: "--font-panell",
   display: "swap",
});
