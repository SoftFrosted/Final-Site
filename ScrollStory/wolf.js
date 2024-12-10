let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        animateImages(9);
    } else {
        animateImages(-15);
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
function animateImages(degree) {
    const topImage = document.querySelector('.top-image');
    const bottomImage = document.querySelector('.bottom-image');

    topImage.style.transform = `rotate(${degree}deg)`;
    bottomImage.style.transform = `rotate(${-degree}deg)`;
}

