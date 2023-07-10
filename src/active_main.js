const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonial', '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map(id=>document.querySelector(`[href="${id}"]`));
const visibleSection = sectionIds.map(()=> false);

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));

function observerCallback(entries){
    let selectLastOne;
    entries.forEach(entry => {
       const index = sectionIds.indexOf(`#${entry.target.id}`);
       selectLastOne = 
       index === sectionIds.length -1 
       && entry.isIntersecting 
       && entry.intersectionRatio >= 0.99; 
        /*
        console.log(entry.target);
        console.log(entry.isIntersecting);
        console.log(entry.intersectionRation);
        */
    });

    const navIndex = selectLastOne ? sectionIds.length - 1 :
     findFirstIntersecting(visibleSection);

}

function findFirstIntersecting(intersections){
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0 
}