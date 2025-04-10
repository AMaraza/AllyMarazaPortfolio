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