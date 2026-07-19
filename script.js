const navLinks = document.querySelectorAll("nav a ");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});
const toggleBtn =
    document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerHTML = "☀️";
    } else {
        toggleBtn.innerHTML = "🌙";
    }
});
window.addEventListener("scroll", function() {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let btn = document.getElementById("topBtn");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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
const text = "Hi, I'm Aswini 👋";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();