// ================= Active Navbar =================
const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(link => {
    link.addEventListener("click", function() {
        navItems.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// ================= Dark Mode =================
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerHTML = "☀️";
    } else {
        toggleBtn.innerHTML = "🌙";
    }
});

// ================= Progress Bar =================
window.addEventListener("scroll", function() {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";
});

// ================= Scroll To Top =================
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {

    const btn = document.getElementById("topBtn");

    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ================= Typing Effect =================
const text = "Hi, I'm Aswini 👋";
let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;

// ================= Mobile Menu =================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 100;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });

}

revealSections();
// Loading Screen

window.addEventListener("load", function() {

    setTimeout(function() {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(function() {

            document.getElementById("loader").style.display = "none";

        }, 600);

    }, 1500);

});
// ================= EmailJS =================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_xg30nkr",
        "template_6tr03i7",
        this
    ).then(function() {

        alert("Message Sent Successfully ✅");

        contactForm.reset();

    }).catch(function(error) {

        alert("Failed ❌");

        console.log(error);

    });

});