// document.addEventListener("DOMContentLoaded", () => {
//     const lenis = new Lenis({
//  duration: 0.2,  // Speed of scrolling (lower = faster)
//  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Smooth easing effect
//  direction: "vertical",  // Can be "horizontal" or "vertical"
//  smooth: true,  // Enables smooth scrolling
//  smoothTouch: false  // Disable smooth scrolling on touch devices
// });


//      function raf(time) {
//          lenis.raf(time)
//          requestAnimationFrame(raf)
//      }

//      requestAnimationFrame(raf)
//  });

gsap.registerPlugin(ScrollTrigger);

// Slide in hero section text
gsap.from(".herodiv1", {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".herodiv1",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

// Slide in hero image
gsap.from(".hero-img", {
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero-img",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

// Brand logos fade in
gsap.from(".brands h4", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".brands",
    start: "top 90%",
    toggleActions: "play reverse play reverse",
  },
});

// Web content image slides in
gsap.from(".web-content img", {
  opacity: 0,
  x: -100,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".web-content img",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
});

// Text content sliding in from the right
gsap.from(".web-content .col-lg-6:nth-child(2)", {
  opacity: 0,
  x: 100,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".web-content .col-lg-6:nth-child(2)",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
});

// Features fade in one by one
gsap.from(".web-content .d-flex", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".web-content .d-flex",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
});

// Web content 2 animations
gsap.from(".webcontent2 .col-lg-6:nth-child(1)", {
  opacity: 0,
  x: -100,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".webcontent2",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
});

// Accordion items fade in one after another
gsap.from(".webcontent2 .accordion-item", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".webcontent2 .accordion",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
});

// Image sliding in from the right
gsap.from(".webcontent2 .col-lg-6:nth-child(2) img", {
  opacity: 0,
  x: 100,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".webcontent2",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
});

// Features in webcontent3
gsap.from("#hero-img", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#hero-img",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

// Heading and description
gsap.from("#headline, #description", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#headline",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
});

// Feature items
gsap.from(".feature", {
  x: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".feature",
    start: "top 90%",
    toggleActions: "play reverse play reverse",
  },
});

// Buttons animations
gsap.from("#btn-start", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "elastic.out(1, 0.5)",
  scrollTrigger: {
    trigger: "#btn-start",
    start: "top 90%",
    toggleActions: "play reverse play reverse",
  },
});

gsap.from("#btn-learn", {
  x: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#btn-learn",
    start: "top 90%",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".animate", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out"
});
