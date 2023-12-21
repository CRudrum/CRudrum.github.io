/*==================== MENU SHOW Y HIDDEN ====================*/
const  navMenu = document.getElementById('nav-menu'),
       navOpen = document.getElementById('nav-open'),
       navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */

navClose.classList.add('hide')

if(navOpen){
    navOpen.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navOpen.classList.add('hide')
        navClose.classList.remove('hide')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navClose.classList.add('hide')
        navOpen.classList.remove('hide')
    })
}





/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    navClose.classList.add('hide')
    navOpen.classList.remove('hide')
}
navLink.forEach(n => n.addEventListener('click', linkAction))