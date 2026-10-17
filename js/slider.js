const backgrounds = {
  mobile: [
    "image_slide_1_mobile.jpg",
    "image_slide_2_mobile.jpg",
    "image_slide_3_mobile.jpg",
  ],
  tablet: [
    "image_slide_1_tablet.jpg",
    "image_slide_2_tablet.jpg",
    "image_slide_3_tablet.jpg",
  ],
  desktop: [
    "image_slide_1_desktop.jpg",
    "image_slide_2_desktop.jpg",
    "image_slide_3_desktop.jpg",
  ],
};

const header = document.querySelector(".header");

const SLIDE_INTERVAL = 5000;

const imagesBaseUrl = new URL("../images/", document.currentScript.src);

function getDeviceType() {
  const width = window.innerWidth;

  if (width < 1024) {
    return "mobile";
  }

  if (width < 1920) {
    return "tablet";
  }

  return "desktop";
}

if (header) {
  let deviceType = getDeviceType();
  let currentIndex = 0;

  function showSlide() {
    const currentImages = backgrounds[deviceType];
    const imageName = currentImages[currentIndex];
    const imageUrl = new URL(imageName, imagesBaseUrl);

    header.style.backgroundImage = `url("${imageUrl.href}")`;
  }

  function nextSlide() {
    const currentImages = backgrounds[deviceType];

    currentIndex = (currentIndex + 1) % currentImages.length;

    showSlide();
  }

  function handleResize() {
    const newDeviceType = getDeviceType();

    if (newDeviceType === deviceType) {
      return;
    }

    deviceType = newDeviceType;
    currentIndex = 0;

    showSlide();
  }

  showSlide();

  window.setInterval(nextSlide, SLIDE_INTERVAL);

  window.addEventListener("resize", handleResize);
}
