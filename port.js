var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer","Web Developer","FullStack Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})



document.addEventListener("DOMContentLoaded", function () {

    const aboutBtn = document.getElementById("aboutBtn");
    const skillsBtn = document.getElementById("skillsBtn");
    const contactBtn = document.getElementById("contactBtn");

    const aboutSection = document.querySelector(".about");
    const skillsSection = document.querySelector(".skills");
    const contactSection = document.querySelector(".contact");

    aboutBtn.addEventListener("click", function (e) {
        e.preventDefault();

        skillsSection.classList.remove("show");
        contactSection.classList.remove("show");
        aboutSection.classList.toggle("show");
    });

    skillsBtn.addEventListener("click", function (e) {
        e.preventDefault();

        aboutSection.classList.remove("show");
        contactSection.classList.remove("show");
        skillsSection.classList.toggle("show");
    });

    contactBtn.addEventListener("click", function (e) {
        e.preventDefault();

        aboutSection.classList.remove("show");
        skillsSection.classList.remove("show");
        contactSection.classList.toggle("show");
    });

});