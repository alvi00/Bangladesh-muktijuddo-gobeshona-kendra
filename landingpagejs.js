gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

ScrollTrigger.create({
  trigger: ".ws",
  start: "top bottom",
  end: "bottom bottom",
  scrub: 1,
  onUpdate: (self) => {
    console.log("ScrollTrigger is updating", self.progress);

    const galleryWrapper = document.querySelector(".gallary-wrapper");
    const sideCols = document.querySelectorAll(".col:not(.main)");
    const mainImg = document.querySelector(".img.main img");

    const scale = 1 + self.progress * 2.65;
    const yTranslate = self.progress * 300;
    const mainImgScale = 2 - self.progress * 0.85;

    galleryWrapper.style.transform = `translate(-50%,-50%)scale(${scale})`;
    sideCols.forEach((col) => {
      col.style.transform = `translateY(${yTranslate}px)`;
    });

    mainImg.style.transform = `scale(${mainImgScale})`;
  },
});

//faster for mobile

// gsap.registerPlugin(ScrollTrigger);

// // Initialize Lenis
// const lenis = new Lenis();

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);

// // Helper function to detect mobile devices
// const isMobile = () => window.innerWidth <= 768;

// // Function to adjust scroll and animation settings
// const adjustScrollForDevice = () => {
//   const wsSection = document.querySelector(".ws");

//   if (isMobile()) {
//     // Reduce scrollable height for mobile
//     wsSection.style.height = "300vh"; // Enough for 3 scrolls on mobile
//   } else {
//     // Restore default scrollable height for desktop
//     wsSection.style.height = "600vh";
//   }

//   // Update ScrollTrigger
//   ScrollTrigger.refresh();
// };

// // Create ScrollTrigger with device-specific animations
// ScrollTrigger.create({
//   trigger: ".ws",
//   start: "top bottom",
//   end: "bottom bottom",
//   scrub: true,
//   onUpdate: (self) => {
//     console.log("ScrollTrigger is updating", self.progress);

//     const galleryWrapper = document.querySelector(".gallary-wrapper");
//     const sideCols = document.querySelectorAll(".col:not(.main)");
//     const mainImg = document.querySelector(".img.main img");

//     // Animation factors
//     const scaleFactor = isMobile() ? 2.65 : 2.65; // Keep consistent
//     const translateFactor = isMobile() ? 900 : 300; // Faster movement on mobile
//     const mainImgFactor = isMobile() ? 0.7 : 0.85;

//     const scale = 1 + self.progress * scaleFactor;
//     const yTranslate = self.progress * translateFactor;
//     const mainImgScale = 2 - self.progress * mainImgFactor;

//     galleryWrapper.style.transform = `translate(-50%,-50%)scale(${scale})`;
//     sideCols.forEach((col) => {
//       col.style.transform = `translateY(${yTranslate}px)`;
//     });

//     mainImg.style.transform = `scale(${mainImgScale})`;
//   },
// });

// // Adjust settings on page load and resize
// adjustScrollForDevice();
// window.addEventListener("resize", adjustScrollForDevice);
