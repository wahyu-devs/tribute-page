window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const parallax = document.getElementById("parallax-header");
    const headerText = document.getElementById("header-text");
    const headerLogo = document.getElementById("header-logo");
    const scrollButton = document.querySelector(".scroll-indicator");

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
    const textShift = Math.min(scrollY * 0.2, 60);
    headerText.style.setProperty("--text-shift", `-${textShift}px`);

    // Move logo up
    const logoShift = Math.min(scrollY * 0.15, 40);
    headerLogo.style.setProperty("--logo-shift", `-${logoShift}px`);

    // Move scroll button up
    const btnShift = Math.min(scrollY * 0.1, 30);
    scrollButton.style.setProperty("--scroll-btn-shift", `${btnShift}px`);

    // Overlay opacity increase
    const overlayEnd = 400;
    let overlayOpacity = 0.3 + (scrollY / overlayEnd) * 0.4;
    overlayOpacity = Math.min(overlayOpacity, 0.7);
    parallax.style.setProperty('--overlay-opacity', overlayOpacity);
});