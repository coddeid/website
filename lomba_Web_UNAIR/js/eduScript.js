// Show and hide article
const bens = document.querySelectorAll('.ben');

bens.forEach(ben => {
    ben.addEventListener('click', () => {
        ben.classList.toggle('open');

        // Change the icon
        const icon = ben.querySelector('.ben-icon i');
        if(icon.className === "bx bxs-chevron-down") {
            icon.className = "bx bxs-chevron-up"
        } else {
            icon.className = "bx bxs-chevron-down"
        }
    })
})