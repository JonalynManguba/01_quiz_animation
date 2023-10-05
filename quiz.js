 // Add an event listener to detect the end of animation and hide the image
 var femaleImage = document.getElementById('femaleImage');
 femaleImage.addEventListener('animationend', function() {
     femaleImage.classList.add('hidden');
 });

 var headline1Image = document.getElementById('headline1Image');
 headline2Image.addEventListener('animationend', function() {
     headline1Image.classList.add('hidden');
 });