// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('This will take you to the full article.');
            // Here you would typically redirect the user to the full news article
            // For example: window.location.href = 'full_article.html';
        });
    });
});
