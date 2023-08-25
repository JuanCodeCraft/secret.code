// script.js

window.addEventListener('scroll', function() {
    const text = document.getElementById('text');
    const section = document.querySelector('section');
    const reveals = document.querySelectorAll('.reveal'); // Corrected typo leghth to length
    const scrollY = window.scrollY;

    for (var i = 0; i < reveals.length; i++) { // Corrected typo leghth to length

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active'); // Added single quotes around 'active'
        }
    }

    // Calculate transition values based on scroll position
    const opacity = 1 - scrollY / section.clientHeight; // Adjust as needed
    const translateY = scrollY / 2; // Adjust as needed

    // Apply transition effects to the text
    text.style.opacity = opacity > 0 ? opacity : 0; // Corrected condition opacity > 3 to opacity > 0
    text.style.transform = `translateY(${translateY}px)`;
});
