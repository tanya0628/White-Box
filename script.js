const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

// Mobile Dropdown

document.querySelectorAll(".dropdown > a").forEach(item => {

    item.addEventListener("click", function(e){

        if(window.innerWidth <= 1100){

            e.preventDefault();

            this.parentElement.classList.toggle("active");

        }

    });

});