// GN Solutions interactions
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  if (window.lucide) lucide.createIcons();
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });
});

// Reveal content as it enters the viewport.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Highlight the navigation item for the current section.
const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => sectionObserver.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();
if (window.lucide) lucide.createIcons();

// Floating WhatsApp contact button.
const whatsappButton = document.createElement("a");
whatsappButton.href = "https://wa.me/923167160597";
whatsappButton.className = "whatsapp-button";
whatsappButton.setAttribute("aria-label", "Chat with GN Solutions on WhatsApp");
whatsappButton.setAttribute("title", "Chat with us on WhatsApp");
whatsappButton.target = "_blank";
whatsappButton.rel = "noopener noreferrer";
whatsappButton.innerHTML = '<svg aria-hidden="true" viewBox="0 0 32 32" width="28" height="28" fill="currentColor"><path d="M16.04 3C8.87 3 3.04 8.82 3.04 15.99c0 2.29.6 4.52 1.74 6.5L3 29l6.67-1.75a13 13 0 0 0 6.36 1.66h.01c7.16 0 13-5.83 13-12.99A12.91 12.91 0 0 0 25.23 6.7 12.9 12.9 0 0 0 16.04 3zm0 23.7h-.01c-1.98 0-3.92-.53-5.61-1.54l-.4-.24-3.96 1.04 1.06-3.86-.26-.4a10.7 10.7 0 0 1-1.64-5.71c0-5.96 4.86-10.81 10.83-10.81 2.89 0 5.61 1.13 7.65 3.17a10.74 10.74 0 0 1 3.17 7.65c0 5.96-4.86 10.81-10.83 10.81zm5.94-8.1c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.37 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37z"/></svg>';
Object.assign(whatsappButton.style, {
  position: "fixed",
  right: "24px",
  bottom: "24px",
  zIndex: "1000",
  width: "60px",
  height: "60px",
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  background: "#25d366",
  color: "#fff",
  boxShadow: "0 8px 24px rgba(37, 211, 102, .35)",
  textDecoration: "none",
  transition: "transform .2s ease, box-shadow .2s ease"
});
whatsappButton.addEventListener("mouseenter", () => {
  whatsappButton.style.transform = "translateY(-3px)";
  whatsappButton.style.boxShadow = "0 12px 30px rgba(37, 211, 102, .45)";
});
whatsappButton.addEventListener("mouseleave", () => {
  whatsappButton.style.transform = "none";
  whatsappButton.style.boxShadow = "0 8px 24px rgba(37, 211, 102, .35)";
});
document.body.append(whatsappButton);
