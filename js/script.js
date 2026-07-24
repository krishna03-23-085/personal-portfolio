

/*==============================TYPING ANIMATION==============================*/

const roles = [
    "Java Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Frontend Learner",
    "ECE Student"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing");

function typeEffect() {

    if (!typingText) return;

    const current = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = current.substring(0, charIndex++);
    } else {

        typingText.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex === current.length + 1) {

        speed = 1500;
        deleting = true;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/*==============================STICKY NAVBAR==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/*==============================ACTIVE NAVIGATION==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});

/*==============================SMOOTH SCROLL==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

/*==============================SCROLL TO TOP==============================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

if (scrollBtn) {

    scrollBtn.onclick = () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }

}

/*==============================
        SCROLL REVEAL
==============================*/

const revealItems = document.querySelectorAll(".fade-in");

const reveal = () => {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            item.classList.add("active");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

/*==============================
        SKILL BAR ANIMATION
==============================*/

const progressBars = document.querySelectorAll(".progress span");

const animateBars = () => {

    progressBars.forEach(bar => {

        const width = bar.dataset.width;

        if (bar.getBoundingClientRect().top < window.innerHeight - 80) {

            bar.style.width = width;

        }

    });

};

window.addEventListener("scroll", animateBars);

animateBars();

/*==============================
        COUNTER
==============================*/

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = target / 80;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(runCounter, 30);

        } else {

            counter.innerText = target;

        }

    });

};

window.addEventListener("load", runCounter);

/*==============================
        DARK MODE
==============================*/

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}

/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("open");

        menuBtn.classList.toggle("active");

    });

}

/*==============================
        CLOSE MENU
==============================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (menu) {

            menu.classList.remove("open");

        }

    });

});

/*==============================
        CONTACT FORM
==============================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid red";

            } else {

                input.style.border = "none";

            }

        });

        if (valid) {

            alert("Thank you! Your message has been recorded.");

            form.reset();

        }

    });

}

/*==============================
        LOADING SCREEN
==============================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader-wrapper");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/*==============================
        PARALLAX EFFECT
==============================*/

window.addEventListener("mousemove", e => {

    const heroImage = document.querySelector(".profile-card");

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

/*==============================
        YEAR
==============================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*=========================================
            END OF FILE
==========================================*/