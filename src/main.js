// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        header.classList.add("header--dark");
    } else {
        header.classList.remove("header--dark");
    }
});



// When home section is changed by scroll then change opacity
const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow and opacity related
const arrow = document.querySelector('.arrow_container');
document.addEventListener("scroll", ()=>{
    //arrow.style.opacity = 0 + window.scrollY / homeHeight;
    if(window.scrollY > homeHeight / 2){
        arrow.style.opacity = 1; 
    } else {
        arrow.style.opacity = 0; 
    }
});

const navbarMenu = document.querySelector('.header_menu');
const navbarToggle = document.querySelector('.header_toggle');
navbarToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
});

navbarMenu.addEventListener('click', ()=>{
    navbarMenu.classList.remove('open');
});
