// document.addEventListener("DOMContentLoaded", function () {
//   gsap.set("nav", { y: -150 });

//   const digit1 = document.querySelector(".digit-1");
//   const digit2 = document.querySelector(".digit-2");
//   const digit3 = document.querySelector(".digit-3");

//   function splitTextIntoSpans(selector) {
//     var element = document.querySelector(selector);
//     if (element) {
//       var text = element.innerText;
//       var splitText = text
//         .split("")
//         .map((char) => `<span>${char}</span>`)
//         .join("");
//       element.innerHTML = splitText;
//     }
//   }

//   splitTextIntoSpans(".header h1");

//   for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 10; j++) {
//       const div = document.createElement("div");
//       div.className = "num";
//       div.textContent = j;
//       digit3.appendChild(div);
//     }
//   }

//   const finalDigit = document.createElement("div");
//   finalDigit.className = "num";
//   finalDigit.textContent = "0";
//   digit3.appendChild(finalDigit);

//   function animate(digit, duration, delay = 1) {
//     const numHeight = digit.querySelector(".num").clientHeight;
//     if (numHeight === 0) {
//       console.error("Element height is zero. Check CSS for proper dimensions.");
//       return;
//     }
//     const totalDistance =
//       (digit.querySelectorAll(".num").length - 1) * numHeight;
//     gsap.to(digit, {
//       duration: duration,
//       y: -totalDistance,
//       delay: delay,
//       ease: "power2.inOut",
//     });
//   }

//   animate(digit3, 5);
//   animate(digit2, 6);
//   animate(digit1, 2, 5);

//   // Progress bar animation
//   gsap.to(".progress-bar", {
//     width: "30%",
//     duration: 2,
//     ease: "power4.inOut",
//     delay: 7,
//   });

//   gsap.to(".progress-bar", {
//     width: "100%",
//     opacity: 0,
//     duration: 2,
//     ease: "power3.out",
//     delay: 8.5,
//     onComplete: () => {
//       gsap.set(".pre-loader", { display: "none" });
//     },
//   });

//   // Image sequence animation with left-to-right reveal
//   const images = document.querySelectorAll(".hero-image > img");

//   // Initially hide images
//   images.forEach((image, index) => {
//     gsap.set(image, {
//       clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
//     });
//   });

//   // Create a timeline for sequential animations
//   const tl = gsap.timeline();

//   images.forEach((image, index) => {
//     // Reveal each image with a 3-second duration and 3-second delay before the next one
//     tl.to(image, {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Reveal the image
//       duration: 1.5, // Time for the image reveal
//       ease: "power4.inOut",
//     }).to(
//       image,
//       {
//         duration: 1.5, // Stay for 3 seconds after reveal
//         delay: 0.5, // Add a little delay so the image stays visible
//       },
//       "+=0.5"
//     ); // Start after the reveal duration
//   });

//   gsap.to(".hero", {
//     scale: 1.25,
//     duration: 3,
//     ease: "power3.inOut",
//     delay: 9,
//   });

//   gsap.to("nav", {
//     y: 0,
//     duration: 1,
//     ease: "power3.out",
//     delay: 11,
//   });

//   gsap.to("h1 span", {
//     top: "0px",
//     stagger: 0.1,
//     duration: 1,
//     ease: "power3.out",
//     delay: 11,
//   });
// });

// // Simulate loading completion or custom tasks
// function completeTasks() {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 15000); // Simulates a 3-second loading process
//   });
// }

// // Redirect logic
// async function redirectToLandingPage() {
//   console.log("Starting tasks...");
//   await completeTasks(); // Wait for tasks to complete
//   console.log("Tasks completed. Redirecting...");
//   window.location.href = "landing_page.html"; // Redirect to the landing page
// }

// // Start redirection after the page loads
// window.onload = redirectToLandingPage;
