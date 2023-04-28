var slide = document.getElementsByClassName('container-slide');
$(slide).slick({
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
});

var menuBtn = document.querySelector('.itens-menu-mobile i');
menuBtn.addEventListener('click', () => {
    let itensMenu = document.querySelector('.menu-mobile');
    if (itensMenu.classList.contains('show')) {
        itensMenu.classList.remove('show');
        itensMenu.classList.add('hide');
    } else {
        itensMenu.classList.remove('hide');
        itensMenu.classList.add('show');
    }

});