function showSlider(image) {
    // Get all the img elements on the page
    const images = document.querySelectorAll('img');
    // Extract the src attributes and create an array of image URLs
    const imageUrls = Array.from(images).map(img => ({ src: img.src }));
  
    // Find the index of the clicked image in the array
    const index = Array.from(images).findIndex(img => img.src === image.src);
    // Open the fancybox with all the images starting from the clicked image
    $.fancybox.open(imageUrls, { index: index });
}

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', showSlider(this));
});