const parallax = document.getElementById("parallax-header");
const headerText = document.getElementById("header-text");
const headerLogo = document.getElementById("header-logo");
const scrollButton = document.querySelector(".scroll-indicator");

let latestScrollY = 0;
let ticking = false;

function onScroll() {
    latestScrollY = window.scrollY;
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

function updateParallax() {
    const scrollY = latestScrollY;

    // Background parallax
    parallax.style.setProperty("--scroll-y", scrollY * 0.4 + "px");

    // Fade out effect
    const fadeStart = 0;
    const fadeEnd = 300;
    let opacity = 1;
    if (scrollY > fadeStart) {
        opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        opacity = Math.max(opacity, 0);
    }
    headerText.style.opacity = opacity;
    headerLogo.style.opacity = opacity;
    scrollButton.style.opacity = opacity;

    // Move text up
    headerText.style.setProperty("--text-shift", `-${Math.min(scrollY * 0.2, 60)}px`);

    // Move logo up
    headerLogo.style.setProperty("--logo-shift", `-${Math.min(scrollY * 0.15, 40)}px`);

    // Move scroll button up
    scrollButton.style.setProperty("--scroll-btn-shift", `${Math.min(scrollY * 0.1, 30)}px`);

    // Overlay opacity increase
    const overlayEnd = 400;
    let overlayOpacity = 0.3 + (scrollY / overlayEnd) * 0.4;
    parallax.style.setProperty('--overlay-opacity', Math.min(overlayOpacity, 0.7));

    ticking = false;
}

window.addEventListener("scroll", onScroll, { passive: true });
