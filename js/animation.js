// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .certificate-card, .resume-card, .contact-card, .timeline-item, .focus-card"

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
