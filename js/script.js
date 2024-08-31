// script.js

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach((img) => {
        img.addEventListener("click", (e) => {
            lightbox.style.display = "block";
            lightboxImg.src = e.target.src;
        });
    });

    lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
