const fadeInElements = document.querySelectorAll('.about');

window.addEventListener('scroll', handlescroll);
const handlescroll = () => {
    fadeInElements.forEach((element) => {
        element.classList.add('fade-in'); // Add fade-in class
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('.show');
        }
    });

    fadeInElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('.show');
        }
    });
}

handlescroll(); // Call the function on page load
