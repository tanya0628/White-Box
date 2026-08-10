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
/* ==============================
       ABOUT SCROLL ANIMATION
============================== */

const aboutSection = document.querySelector(".about-section");

if (aboutSection) {

    const aboutObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("about-visible");

                    aboutObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    aboutObserver.observe(aboutSection);
}
/* =================================
      WELCOME SCROLL ANIMATION
================================= */

const welcomeSection = document.querySelector(".welcome-section");

if (welcomeSection) {

    const welcomeObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("welcome-visible");

                    welcomeObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    welcomeObserver.observe(welcomeSection);

}

/* =========================================
        SERVICES ANIMATION
========================================= */

const servicesSection =
    document.querySelector(".services-section");

if (servicesSection) {

    const servicesObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "services-visible"
                        );

                        servicesObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    servicesObserver.observe(servicesSection);

}


/* =========================================
        VIEW DETAILS
========================================= */

const serviceButtons =
    document.querySelectorAll(".service-more");


serviceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card =
            button.closest(".service-card");

        card.classList.toggle("show-details");


        const icon =
            button.querySelector("i");


        if (card.classList.contains("show-details")) {

            button.firstChild.textContent =
                " Hide Details ";

            icon.classList.remove(
                "fa-arrow-right"
            );

            icon.classList.add(
                "fa-chevron-up"
            );

        } else {

            button.firstChild.textContent =
                " View Details ";

            icon.classList.remove(
                "fa-chevron-up"
            );

            icon.classList.add(
                "fa-arrow-right"
            );

        }

    });

});
const filterButtons = document.querySelectorAll(".filter-btn");
const serviceCards = document.querySelectorAll(".service-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Active button */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        const filter = button.dataset.filter;


        serviceCards.forEach(card => {

            const category = card.dataset.category;


            if(filter === "all" || category === filter){

                card.style.display = "block";

                card.animate(
                    [
                        {
                            opacity: 0,
                            transform: "translateY(20px)"
                        },
                        {
                            opacity: 1,
                            transform: "translateY(0)"
                        }
                    ],
                    {
                        duration: 450,
                        easing: "ease-out"
                    }
                );

            }else{

                card.style.display = "none";

            }

        });

    });

});
