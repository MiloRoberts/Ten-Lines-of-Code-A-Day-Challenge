function swapImageSource(firstImage, secondImage) {
    secondImage.src = firstImage.src;
    firstImage.src = "";
}

export default swapImageSource;