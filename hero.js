document.addEventListener('DOMContentLoaded', function() {
    var heroImages = [
        "url('image/pexels-tembela-bohle-1884584.jpg')",
        "url('image/shoe1.jpg')"
       
        // Add more images as needed
    ];
    var currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length; // Cycle through the images
        document.getElementById('heroImg').style.backgroundImage = heroImages[currentImageIndex];
    }

    setInterval(changeImage, 3000); // Change image every 3000 milliseconds (3 seconds)
});