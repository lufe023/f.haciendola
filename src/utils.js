import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

// Inicializar Swipers
export const initializeSwipers = () => {
    new Swiper(".main-swiper", {
        speed: 500,
        navigation: {
            nextEl: ".swiper-arrow-prev",
            prevEl: ".swiper-arrow-next",
        },
    });

    new Swiper(".product-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: "#mobile-products .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            980: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    new Swiper(".product-watch-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: "#smart-watches .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            980: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    new Swiper(".testimonial-swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-arrow-prev",
            prevEl: ".swiper-arrow-next",
        },
    });
};

// Manejar la búsqueda emergente
export const searchPopup = () => {
    const headerNav = document.querySelector("#header-nav");
    if (headerNav) {
        headerNav.addEventListener("click", (e) => {
            if (e.target.classList.contains("search-button")) {
                document
                    .querySelector(".search-popup")
                    .classList.toggle("is-visible");
            } else if (e.target.classList.contains("btn-close-search")) {
                document
                    .querySelector(".search-popup")
                    .classList.toggle("is-visible");
            }
        });
    }

    const searchPopupTrigger = document.querySelector(".search-popup-trigger");
    if (searchPopupTrigger) {
        searchPopupTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".search-popup").classList.add("is-visible");
            setTimeout(() => {
                document.querySelector("#search-popup").focus();
            }, 350);
        });
    }

    const searchPopup = document.querySelector(".search-popup");
    if (searchPopup) {
        searchPopup.addEventListener("click", (e) => {
            if (
                e.target.classList.contains("search-popup-close") ||
                e.target.closest(".search-popup-close") ||
                e.target.classList.contains("search-popup")
            ) {
                e.preventDefault();
                searchPopup.classList.remove("is-visible");
            }
        });
    }

    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
            const searchPopup = document.querySelector(".search-popup");
            if (searchPopup) {
                searchPopup.classList.remove("is-visible");
            }
        }
    });
};

// Inicializar cantidad de productos
export const initProductQty = () => {
    document.querySelectorAll(".product-qty").forEach((el) => {
        const quantityInput = el.querySelector("#quantity");
        const quantityRightPlus = el.querySelector(".quantity-right-plus");
        const quantityLeftMinus = el.querySelector(".quantity-left-minus");

        if (quantityRightPlus) {
            quantityRightPlus.addEventListener("click", (e) => {
                e.preventDefault();
                const quantity = parseInt(quantityInput.value, 10);
                quantityInput.value = quantity + 1;
            });
        }

        if (quantityLeftMinus) {
            quantityLeftMinus.addEventListener("click", (e) => {
                e.preventDefault();
                const quantity = parseInt(quantityInput.value, 10);
                if (quantity > 0) {
                    quantityInput.value = quantity - 1;
                }
            });
        }
    });
};

// Inicializar Bootstrap al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".your-bootstrap-element");
    if (elements.length > 0) {
        elements.forEach((element) => {
            // Inicializa Bootstrap aquí
        });
    }
});
