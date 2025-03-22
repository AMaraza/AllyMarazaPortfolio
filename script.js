const aboutArrowsUp = document.getElementsByClassName('fa-solid fa-angle-up');
const aboutArrowsDown = document.getElementsByClassName('fa-solid fa-angle-down');

let active = false;

/*function toggleAboutSection(){

    if (!active){
        aboutSection.style.display = "flex";
        for (let i = 0; i < aboutArrowsUp.length; i++) {
            aboutArrowsUp[i].style.display = "inline";
            aboutArrowsDown[i].style.display = "none";
        }
        active = true;
    }
    else{
        aboutSection.style.display = "none";
        for (let i = 0; i < aboutArrowsUp.length; i++) {
            aboutArrowsUp[i].style.display = "none";
            aboutArrowsDown[i].style.display = "inline";
        }
        active = false;
    }

}*/

const aboutSection = document.getElementById("about_me");
const aboutArrow = document.getElementById("about_arrow");

aboutArrow.addEventListener("click", function () {
    aboutSection.classList.toggle("open");
    aboutArrow.classList.toggle("open");
});