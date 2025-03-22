const aboutSection = document.getElementById("about_me");
const aboutArrow = document.getElementById("about_arrow");
const webDevCategory = document.getElementById("web_dev");
const categoryContainer = document.getElementById("category_container");

aboutArrow.addEventListener("click", function () {
    aboutSection.classList.toggle("open");
    aboutArrow.classList.toggle("open");
});

webDevCategory.addEventListener("click", function () {
    webDevCategory.classList.toggle("expand");
    categoryContainer.classList.toggle("expand");
});