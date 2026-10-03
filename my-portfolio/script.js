/* =========================================================
   SHAK KAMAL PORTFOLIO
   Interactive Features
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const isOpen =
            navLinks.classList.contains("show");

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        menuToggle.textContent =
            isOpen ? "×" : "☰";

    });


    /* Close mobile menu after selecting a page */

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !message) {

                formMessage.textContent =
                    "Please complete all fields.";

                return;
            }


            /*
                For now, the form opens the user's
                email application.

                Later, when we add a backend/service,
                this can become a real online form.
            */

            const recipient =
                "kamalakhunzada0987@gmail.com";

            const subject =
                encodeURIComponent(
                    `Portfolio Contact from ${name}`
                );

            const body =
                encodeURIComponent(
                    `Name: ${name}\n\n` +
                    `Email: ${email}\n\n` +
                    `Message:\n${message}`
                );


            window.location.href =
                `mailto:${recipient}?subject=${subject}&body=${body}`;


            formMessage.textContent =
                "Opening your email application...";

        }
    );

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElements =
    document.querySelectorAll(".current-year");

const currentYear =
    new Date().getFullYear();

yearElements.forEach(element => {

    element.textContent = currentYear;

});


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Shak Kamal Portfolio — Website Loaded Successfully."
);