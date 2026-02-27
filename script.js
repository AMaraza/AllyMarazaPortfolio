const tabs = document.querySelectorAll('a');
const sections = document.querySelectorAll('.inner-project-content');

tabs.forEach(tab => {
    if (tab.id=="1" || tab.id=="2" || tab.id=="3" || tab.id=="4") {

        tab.addEventListener('click', () => {

            tabs.forEach(subTab => {
                if (subTab.id=="1" || subTab.id=="2" || subTab.id=="3" || subTab.id=="4") {
                    subTab.classList.remove('active-section');
                }
            });

            tab.classList.add('active-section');


            sections.forEach(section => {
                section.classList.remove('active-content');
                section.classList.add('inactive-content');
            });


            const targetSection = document.querySelector(
                `#section${tab.id}`
            ).parentElement;

            targetSection.classList.remove('inactive-content');
            targetSection.classList.add('active-content');

        });

    }
});