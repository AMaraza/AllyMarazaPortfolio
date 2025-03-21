const aboutSection = document.querySelector('#about_me');
const aboutArrowsUp = document.getElementsByClassName('fa-solid fa-angle-up');
const aboutArrowsDown = document.getElementsByClassName('fa-solid fa-angle-down');

let active = false;

function toggleAboutSection(){

    if (!active){
        aboutSection.style.display = "block";
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

}