document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight / 1.3;
            if (sectionTop < triggerPoint) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run once to show sections already in view
});


// Attach click event listener to menu toggle
document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);


function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
// Shrink Navbar on Scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

// FAQ Toggle Animation
document.querySelectorAll(".faq-item h3").forEach(item => {
    item.addEventListener("click", () => {
        let content = item.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Hero Section Image Click Animation
    const heroImage = document.querySelector(".profile img");

    heroImage.addEventListener("click", function() {
        this.style.transform = "rotate(360deg)";
        setTimeout(() => {
            this.style.transform = "rotate(0deg)";
        }, 1000);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Hero Section Image Click Animation
    const heroImage = document.querySelector(".profile img");

    heroImage.addEventListener("click", function() {
        this.style.transform = "rotate(360deg)";
        setTimeout(() => {
            this.style.transform = "rotate(0deg)";
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
