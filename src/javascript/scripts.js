$(document).ready(function () {
    let indicator = $(".indicator");
    let navLinks = $(".navbar a");

    function moveIndicator(element) {
        let width = element.outerWidth();
        let left = element.position().left;
        indicator.css({ width: width, left: left });
    }

    navLinks.on("click", function (event) {
        event.preventDefault();
        let target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 800);
        moveIndicator($(this));
    });

    moveIndicator(navLinks.first());
});

// Menu mobile toggle
document.addEventListener("DOMContentLoaded", function () {
    const mobileButton = document.getElementById("mobile_button_list");
    const mobileMenu = document.getElementById("mobile_menu");

    mobileButton.addEventListener("click", function () {
        mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!mobileButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.style.display = "none";
        }
    });
});

// Cor de fundo do menu ao rolar
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    let scrollTop = window.scrollY;
    let maxScroll = 300;
    let scrollPercent = Math.min(scrollTop / maxScroll, 1);

    navbar.style.backgroundColor = `rgba(19, 41, 61, ${scrollPercent})`;
    navbar.style.color = scrollPercent > 0.5 ? '#fff' : '#ccc';
});

// Script da seção de dúvidas (FAQ)
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Carrossel de imagens
const carousel = document.getElementById("carousel");
const totalImages = carousel.children.length;
let index = 0;

function updateCarousel() {
    const offset = -index * carousel.clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextImage() {
    index = (index + 1) % totalImages;
    updateCarousel();
}

function prevImage() {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
}

window.addEventListener("resize", updateCarousel);
