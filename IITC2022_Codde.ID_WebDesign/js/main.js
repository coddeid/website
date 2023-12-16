// Author: Raka
// Copyright: Codde.iD


// Navbar scroll style changing //
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 10)
})


// show and hide article 
const funs = document.querySelectorAll('.fun');

funs.forEach(fun => {
    fun.addEventListener('click', () =>{
        fun.classList.toggle('open');

        // Change icon
        const icon = fun.querySelector('.fun-icon i');
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus"
        }else{
            icon.className = 'uil uil-plus'
        }
    })
})

// Nav menu click bp-md //
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none";
})

    // close nav menu
    const closeNav = () => {
        menu.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block"
    }

    closeBtn.addEventListener('click', closeNav);

    