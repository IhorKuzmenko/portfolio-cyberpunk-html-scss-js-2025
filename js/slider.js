const backgrounds = {
    desktop: ['url("/portfolio-cyberpunk-html-scss-js-2025/images/image_slide_1_desktop.jpg")',
        'url("/portfolio-cyberpunk-html-scss-js-2025/images/image_slide_2_desktop.jpg")',
        'url("/portfolio-cyberpunk-html-scss-js-2025/images/image_slide_3_desktop.jpg")'],
    tablet: ['url("/portfolio-cyberpunk-html-scss-js-2025/images/image_slide_1_tablet.jpg")',
        'url("/portfolio-cyberpunk-html-scss-js-2025/images/image_slide_2_tablet.jpg")',
        'url("/portfolio-cyberpunk-html-scss-js-2025/images/image_slide_3_tablet.jpg")'],
    mobile: ['url("/portfolio-cyberpunk-html-scss-js-2025/images/image_slide_1_mobile.jpg")',
        'url("/portfolio-cyberpunk-html-scss-js-2025/images/image_slide_2_mobile.jpg")',
        'url("/portfolio-cyberpunk-html-scss-js-2025/images/image_slide_3_mobile.jpg")'],
};

function getDeviceType() {
    const w = window.innerWidth;
    if (w <= 320) return 'mobile';
    if (w <= 1024) return 'tablet';
    return 'desktop';
}

const header = document.querySelector('.header');
let deviceType = getDeviceType();
let currentIndex = 0;
let currentImages = backgrounds[deviceType];

function showSlide(index) {
    header.style.backgroundImage = currentImages[index];
}

function startSlider() {
    showSlide(currentIndex);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        showSlide(currentIndex);
    }, 5000);
}

window.addEventListener('resize', () => {
    let newDeviceType = getDeviceType();
    if (newDeviceType !== deviceType) {
        deviceType = newDeviceType;
        currentImages = backgrounds[deviceType];
        currentIndex = 0;
        showSlide(currentIndex);
    }
});

startSlider();

// function changeBackgroundImage() {
//     header.style.backgroundImage = backgrounds[index];
//     index = (index + 1) % backgrounds.length;
// }

// changeBackgroundImage();

// setInterval(changeBackgroundImage, 5000);
