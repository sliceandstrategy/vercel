// Import GSAP library
import gsap from "gsap"
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", () => {
  // Navigation scroll effect
  const nav = document.querySelector(".nav")
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }
  })

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Tabs functionality
  const tabs = document.querySelectorAll(".tab")
  const tabContents = document.querySelectorAll(".tab-content")

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab")

      tabs.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      tab.classList.add("active")
      document.querySelector(`.tab-content[data-tab="${target}"]`).classList.add("active")
    })
  })

  // Parallax effect for hero section
  const heroBackground = document.querySelector(".hero-background")

  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset
    heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`
  })

  // Animate elements on scroll
  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(animateOnScroll, {
    root: null,
    threshold: 0.1,
  })

  document.querySelectorAll(".process-step, .impact-card, .news-card, .partner-logo").forEach((el) => {
    observer.observe(el)
  })

  // GSAP animations

  // Hero animations
  gsap.from(".hero-logo", { opacity: 0, scale: 0.5, duration: 1, ease: "back.out(1.7)" })
  gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1, delay: 0.5 })
  gsap.from(".hero-description", { opacity: 0, y: 50, duration: 1, delay: 0.7 })
  gsap.from(".hero-cta", { opacity: 0, y: 50, duration: 1, delay: 0.9 })

  // Section title animations
  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    })
  })

  // Process timeline animation
  gsap.from(".process-step", {
    scrollTrigger: {
      trigger: ".process-timeline",
      start: "top 80%",
    },
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1,
  })

  // Impact cards animation
  gsap.from(".impact-card", {
    scrollTrigger: {
      trigger: ".impact-grid",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
  })

  // News cards animation
  gsap.from(".news-card", {
    scrollTrigger: {
      trigger: ".news-grid",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
  })

  // Partner logos animation
  gsap.from(".partner-logo", {
    scrollTrigger: {
      trigger: ".partners-grid",
      start: "top 80%",
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.1,
    duration: 1,
  })
})

