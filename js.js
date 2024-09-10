// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item');
    const searchBar = document.getElementById('search-bar');
    const categoryFilter = document.getElementById('category-filter');

    // Filter by category
    categoryFilter.addEventListener('change', function() {
        const category = categoryFilter.value;
        newsItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Search functionality
    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value.toLowerCase();
        newsItems.forEach(item => {
            const headline = item.querySelector('.headline').textContent.toLowerCase();
            if (headline.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Read More button
    const buttons = document.querySelectorAll('.read-more');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('This will take you to the full article.');
            // Redirect to the full article page
            // window.location.href = 'full_article.html';
        });
    });
});
