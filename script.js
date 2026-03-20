// LOADER
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        typing();
    }, 1200);
};

// TYPING
const text = "BTS SIO SISR | Systèmes & Réseaux";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 40);
    }
}

// SCROLL ANIMATION
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => observer.observe(card));

// NAV ACTIVE
const links = document.querySelectorAll("nav a");
const current = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === current) {
        link.classList.add("active");
    }
});
