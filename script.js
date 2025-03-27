const aboutArrow = document.querySelector('.about-arrow');
const aboutSection = document.querySelector('.about-me');
const downArrow = document.querySelector('.fas.fa-angle-down');
const upArrow = document.querySelector('.fas.fa-angle-up');

aboutArrow.addEventListener('click', e => {
    aboutSection.classList.toggle('active');
    downArrow.classList.toggle('active');
    upArrow.classList.toggle('active');
})