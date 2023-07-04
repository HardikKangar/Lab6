// STEP 1: Initialize and declare variables
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

// STEP 2: Loop 5 times to create the <img> elements
for (var i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);

  // STEP 3: Build event handler for each <img>
  newImage.onclick = function (event) {
    var imgSrc = event.target.getAttribute('src');
    displayImage(imgSrc);
    clearWayfinding();
    event.target.style.outline = '5px solid red';
    event.target.style.filter = 'grayscale(0%)'; // Remove grayscale filter from selected image
  };

  // Lab 6 STEP A: Inside the thumbBar.onclick event handler function, change the event.target CSS outline property to "5px solid red"
  newImage.style.outline = 'none'; // Set outline to none for non-selected images

  // Lab 6 STEP B: Change the event.target CSS position property to "relative"
  newImage.style.position = 'relative';

  // Lab 6 STEP C: Set the CSS z-index property to "10" so that the thumbnail clicked is on top of all the others
  newImage.style.zIndex = '10';

  // Check if the image is currently displayed
  if (newImage.getAttribute('src') !== displayedImage.getAttribute('src')) {
    // Apply grayscale filter to non-selected images
    newImage.style.filter = 'grayscale(100%)';
  }
}

// STEP 4: Function to change the src of the main <img>
function displayImage(value) {
  displayedImage.setAttribute('src', value);
}

// Lab 6 STEP D: Initialize and declare a var called 'thumbImgs' using the querySelectorAll method to grab all the IMG elements inside the .thumb-bar
var thumbImgs = document.querySelectorAll('.thumb-bar img');

// Lab 6 STEP E: Build a function called 'clearWayfinding()' that loops through the thumbImgs array with a FOR loop
function clearWayfinding() {
  for (var i = 0; i < thumbImgs.length; i++) {
    // Lab 6 STEP F: Inside the clearWayfinding function, for each thumbImgs IMG element, set the CSS outline property to "none" and the filter property to "grayscale(100%)"
    thumbImgs[i].style.outline = 'none'; // Set outline to none for non-selected images
    thumbImgs[i].style.filter = 'grayscale(100%)';
    thumbImgs[i].style.zIndex = '0';
  }
}

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
