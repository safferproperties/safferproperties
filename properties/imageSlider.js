function showSlider(image) {
  // Reset page zoom to default
  document.body.style.zoom = 1;


  // Get all the img elements on the page
  const images = document.querySelectorAll('img');
  // Extract the src attributes and create an array of image URLs
  let imageUrls = Array.from(images).map(img => ({ src: img.src }));
  
  // Sort the imageUrls array by file name in ascending order
  imageUrls.sort(function(a, b) {
    const fileNameA = a.src.split('/')[5];
    const numericPartA = fileNameA.replace(/image|\.jpg/g, "");
    const numberA = parseInt(numericPartA);
    const fileNameB = b.src.split('/')[5];
    const numericPartB = fileNameB.replace(/image|\.jpg/g, "");
    const numberB = parseInt(numericPartB);
    // Compare the file names in ascending order
    return numberA - numberB;
  });
  // Find the index of the clicked image in the sorted array
  const index = imageUrls.findIndex(img => img.src === image.src);
  // Open the fancybox with all the images starting from the clicked image
  $.fancybox.open(imageUrls, { index: index });
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function resetMobileZoom() {
  // Reset the initial scale for mobile devices
  const metaTag = document.querySelector('meta[name="viewport"]');
  if (metaTag) {
    metaTag.setAttribute('content', 'width=device-width, initial-scale=1');
  }
}

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', () => {
    if (isMobileDevice()) {
      // Reset page zoom for mobile devices
      resetMobileZoom();
    }
    showSlider(image);
  });
});