// Copy Contract Address
let HTMLBox = document.getElementById("ADDBox");
let HTMLButton = document.getElementById("ADDButton");
HTMLButton.onclick = function () {
  HTMLBox.select();
  document.execCommand("copy");
  HTMLButton.innerText = "Address Copied";
};

// Slider
const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");

let autoSlideDirection = 1; // 1 for forward, -1 for backward

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const autoSlide = () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

    if (autoSlideDirection === 1 && carousel.scrollLeft >= scrollWidth) {
        // If at the end, change direction to backward
        autoSlideDirection = -1;
    } else if (autoSlideDirection === -1 && carousel.scrollLeft <= 0) {
        // If at the beginning, change direction to forward
        autoSlideDirection = 1;
    }

    if (autoSlideDirection === 1) {
        // If forward direction, continue scrolling to the right
        carousel.scrollLeft += firstImgWidth; // Scroll to the next image
    } else {
        // If backward direction, smoothly scroll back to the previous image
        carousel.scrollLeft -= firstImgWidth;
    }

    showHideIcons();
    setTimeout(autoSlide, 5000); // Call autoSlide function again after 5 seconds
};

// Start auto sliding when the page loads
autoSlide();
