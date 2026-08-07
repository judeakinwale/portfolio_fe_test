// import Lenis, { LenisOptions } from "lenis";
// import { getWindow } from "@/utils/window";
// import { useEffect } from "react";

// interface ScrollOptions {
//   lenisOptions?: LenisOptions;
//   useCustomRaf?: boolean;
//   useWithGSAP?: boolean;
//   customRafFn?: (time: number) => void;
// }

// // requires a client component to work
// export const useLenisScroll = (scrollOptions?: ScrollOptions) => {
//   useEffect(() => {
//     const w = getWindow();
//     if (!w) return;

//     const options = scrollOptions || {};
//     const { lenisOptions, useCustomRaf, useWithGSAP, customRafFn } = options;
//     const isModified = useCustomRaf || useWithGSAP;

//     // Initialize Lenis
//     const lenis = new Lenis({
//       autoRaf: !isModified,
//       ...lenisOptions,
//     });

//     console.log("Lenis initialized with options:", lenisOptions);

//     if (useWithGSAP) {
//       // // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
//       // lenis.on("scroll", ScrollTrigger.update);
//       // // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
//       // // This ensures Lenis's smooth scroll animation updates on each GSAP tick
//       // gsap.ticker.add((time) => {
//       //   lenis.raf(time * 1000); // Convert time from seconds to milliseconds
//       // });
//       // // Disable lag smoothing in GSAP to prevent any delay in scroll animations
//       // gsap.ticker.lagSmoothing(0);
//     }

//     if (useCustomRaf) {
//       // Listen for the scroll event and log the event data
//       lenis.on("scroll", (e) => {
//         // console.log(e);
//       });

//       // Use requestAnimationFrame to continuously update the scroll
//       function defaultRaf(time) {
//         lenis.raf(time);
//         requestAnimationFrame(defaultRaf);
//       }

//       const rafFn = customRafFn || defaultRaf;

//       // ! causes severe slowdowns
//       // this feels like it should be in the layout component
//       requestAnimationFrame(rafFn);
//     }
//   }, [scrollOptions]);
// };
