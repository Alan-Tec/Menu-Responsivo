function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu'); 
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').scr = "assets/img/Carol.jpeg";
    } else {
        menuMobile.classList.sdd('open');
    }
}