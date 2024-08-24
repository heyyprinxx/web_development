// script.js
document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.fade-in');

    paragraphs.forEach((para, index) => {
        setTimeout(() => {
            para.classList.add('show');
        }, index * 1000); // Stagger the fade-in effect for each paragraph
    });
});