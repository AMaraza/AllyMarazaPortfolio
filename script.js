const aboutSection = document.getElementById("about_me");
const aboutArrow = document.getElementById("about_arrow");

//Category Sections
const webDevCategory = document.getElementById("web_dev");
const tabletopCategory = document.getElementById("tabletop");
const cppCategory = document.getElementById("cpp");

const categoryContainer = document.getElementById("category_container");
    aboutArrow.addEventListener("click", function () {
    aboutSection.classList.toggle("open");
    aboutArrow.classList.toggle("open");
});

webDevCategory.addEventListener("click", function () {
    webDevCategory.classList.toggle("expand");
    tabletopCategory.classList.toggle("expand_inactive");
    cppCategory.classList.toggle("expand_inactive");
    //categoryContainer.classList.toggle("expand");
});

tabletopCategory.addEventListener("click", function () {
    webDevCategory.classList.toggle("expand_inactive");
    tabletopCategory.classList.toggle("expand");
    cppCategory.classList.toggle("expand_inactive");
    categoryContainer.classList.toggle("expand");
});

cppCategory.addEventListener("click", function () {
    webDevCategory.classList.toggle("expand_inactive");
    tabletopCategory.classList.toggle("expand_inactive");
    cppCategory.classList.toggle("expand");
    categoryContainer.classList.toggle("expand");
});