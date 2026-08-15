const previewImages = document.querySelectorAll(".preview-image");
const prevButton = document.querySelector(".preview-prev");
const nextButton = document.querySelector(".preview-next");

let currentImage = 0;


function showImage(index) {
    previewImages.forEach((image) => {
        image.classList.remove("preview-active");
    });

    previewImages[index].classList.add("preview-active");
}


nextButton.addEventListener("click", () => {
    currentImage++;

    if (currentImage >= previewImages.length) {
        currentImage = 0;
    }

    showImage(currentImage);
});


prevButton.addEventListener("click", () => {
    currentImage--;

    if (currentImage < 0) {
        currentImage = previewImages.length - 1;
    }

    showImage(currentImage);
});