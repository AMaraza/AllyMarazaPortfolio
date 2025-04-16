const aboutArrow = document.querySelector('.about-arrow');
const aboutSection = document.querySelector('.about-me');
const downArrow = document.querySelector('.fas.fa-angle-down');
const upArrow = document.querySelector('.fas.fa-angle-up');

aboutArrow.addEventListener('click', e => {
    aboutSection.classList.toggle('active');
    downArrow.classList.toggle('active');
    upArrow.classList.toggle('active');
})

const projectCardContainer = document.querySelector('.project-cards');
const projectCard = document.querySelectorAll('.collapsed-section');

const collapseDetails = document.querySelector('.collapse');
const projectDetails = document.querySelector('.project-expanded');

for (const project of projectCard){
    project.addEventListener('click', e => {
        projectCardContainer.style.display = 'none';
        projectDetails.style.display = 'block';
    })
}

collapseDetails.addEventListener('click', e => {
    projectDetails.style.display = 'none';
    projectCardContainer.style.display = 'flex';
})


const parentWeb = document.querySelector('#parent-web');
const parentTabletop = document.querySelector('#parent-tabletop');
const parentC = document.querySelector('#parent-c');

const containerWeb = document.querySelector('#web');
const containerTabletop = document.querySelector('#tabletop');
const containerC = document.querySelector('#c');

parentWeb.addEventListener('click', e => {
    containerWeb.style.display = "flex";
    containerTabletop.style.display = 'none';
    containerC.style.display = 'none';

    parentWeb.style.backgroundColor = "lightgreen";
    parentTabletop.style.backgroundColor = "white";
    parentC.style.backgroundColor = "white";
});
parentTabletop.addEventListener('click', e => {
    containerWeb.style.display = "none";
    containerTabletop.style.display = 'flex';
    containerC.style.display = 'none';

    parentWeb.style.backgroundColor = "white";
    parentTabletop.style.backgroundColor = "lightgreen";
    parentC.style.backgroundColor = "white";
});
parentC.addEventListener('click', e => {
    containerWeb.style.display = "none";
    containerTabletop.style.display = 'none';
    containerC.style.display = 'flex';

    parentWeb.style.backgroundColor = "white";
    parentTabletop.style.backgroundColor = "white";
    parentC.style.backgroundColor = "lightgreen";
});