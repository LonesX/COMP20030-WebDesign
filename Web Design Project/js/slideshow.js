
    //This is to start the indexing at 1 so that first image is displayed
    let slideIndex = 1;
    showSlides(slideIndex);

// Next/previous controls
    function nextSlides(n) {
        showSlides(slideIndex += n);
    }

//  function shows the next slide in the slideshow containers
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
