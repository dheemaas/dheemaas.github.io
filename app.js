const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('nav-links ul li');


    burger.addEventListener('click', () => {
            //Toggle Nav
        nav.classList.toggle('nav-active');

            //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 3}s`;
            }
        });
            //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

const header = document.querySelector('nav');
const sectionOne = document.querySelector('.tit');

const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
){
    entries.forEach(entry =>{
        if (!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
