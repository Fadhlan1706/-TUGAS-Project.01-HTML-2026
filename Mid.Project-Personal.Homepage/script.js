// DARK MODE
function toggleDarkMode(){
    document.body.classList.toggle('dark');
}

// ANIMASI SCROLL
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {

    fadeElements.forEach(element => {

        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            element.classList.add('show');
        }

    });

});

// VALIDASI FORM
function validateForm(){

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === "" || email === "" || message === ""){
        alert("Semua field harus diisi!");
        return false;
    }

    alert("Pesan berhasil dikirim!");
    return true;
}

// LOAD ANIMASI AWAL
window.addEventListener('load', () => {

    fadeElements.forEach(element => {
        element.classList.add('show');
    });

});