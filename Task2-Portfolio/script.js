const projectData = {
  "agentic-interview": {
    title: "Agentic AI Mock Interview Platform",
    description: "A smart AI-powered mock interview platform that simulates real interview environments using voice-based interaction and response analysis.",
    points: [
      "Voice-based AI interview simulation.",
      "Real-time feedback and performance evaluation.",
      "Dynamic AI-generated questions tailored to interview flow.",
      "Interactive and user-friendly candidate interface."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI/NLP", "Speech Recognition"]
  },
  "green-route": {
    title: "Green Route AI",
    description: "An AI-powered route optimization solution that suggests eco-friendly and efficient travel routes by analyzing traffic, distance, and fuel patterns.",
    points: [
      "Smart route optimization for efficient travel.",
      "Eco-friendly navigation suggestions to reduce carbon footprint.",
      "Real-time traffic insights for better route decisions.",
      "Interactive map-based route visualization."
    ],
    techStack: ["React.js", "Node.js", "Maps API", "AI Optimization Logic"]
  },
  "artisan-marketplace": {
    title: "AI Marketplace for Local Artisans",
    description: "A marketplace platform empowering local artisans through AI-driven product recommendations and a seamless browsing experience.",
    points: [
      "Product listing and catalog management for artisans.",
      "AI-based recommendation engine for personalized discovery.",
      "Search and filtering functionality for faster product exploration.",
      "Responsive, user-friendly interface for all devices."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Recommendation System"]
  }
};

const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");
const allNavAnchors = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
});

allNavAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPoints = document.getElementById("modalPoints");
const closeModalBtn = document.querySelector(".close-modal");
const projectButtons = document.querySelectorAll(".project-btn");

const openModal = (projectKey) => {
  const project = projectData[projectKey];
  if (!project) return;

  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalPoints.innerHTML = `
    <li><strong>Key Features</strong></li>
    ${project.points.map((point) => `<li>${point}</li>`).join("")}
    <li class="tech-heading"><strong>Tech Stack</strong></li>
    <li class="tech-line">${project.techStack.join(" | ")}</li>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
};

projectButtons.forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.project));
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});

const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
let testimonialIndex = 0;

const showTestimonial = (index) => {
  testimonials.forEach((item) => item.classList.remove("active"));
  testimonials[index].classList.add("active");
};

const goToNext = () => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
};

const goToPrev = () => {
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
};

nextBtn.addEventListener("click", goToNext);
prevBtn.addEventListener("click", goToPrev);
setInterval(goToNext, 5000);

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const validators = {
  name: (value) => value.trim().length >= 2 || "Please enter at least 2 characters.",
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || "Please enter a valid email address.",
  message: (value) => value.trim().length >= 10 || "Message should be at least 10 characters."
};

const setError = (field, message) => {
  const wrapper = field.closest(".form-group");
  wrapper.querySelector(".error-text").textContent = message || "";
};

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  ["name", "email", "message"].forEach((key) => {
    const field = contactForm.elements[key];
    const result = validators[key](field.value);
    if (result !== true) {
      isValid = false;
      setError(field, result);
    } else {
      setError(field, "");
    }
  });

  if (!isValid) {
    formStatus.textContent = "Please fix the highlighted fields.";
    formStatus.style.color = "#ff5f7a";
    return;
  }

  formStatus.textContent = "Message validated successfully. Connect this form to your backend/email service.";
  formStatus.style.color = "#24d68a";
  contactForm.reset();
});
