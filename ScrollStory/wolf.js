let lastScrollTop = 0;
let degreeChange = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollIncrement = 2;
    degreeChange += (scrollTop > lastScrollTop) ? scrollIncrement : -scrollIncrement;

    if (Math.abs(degreeChange) >= 9) {
        animateImages(degreeChange);
        degreeChange = 0;
    }

    lastScrollTop = Math.max(scrollTop, 0);
});

function animateImages(degree) {
    const topImage = document.querySelector('.top-image');
    const bottomImage = document.querySelector('.bottom-image');

    topImage.style.transform = `rotate(${degree}deg)`;
    bottomImage.style.transform = `rotate(${-degree}deg)`;
}
