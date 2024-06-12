// JavaScript for redirection to game pages

// Function to redirect to a specified game URL
function redirectToGame(url) {
    window.location.href = url;
}

// Add event listeners to game cards for redirection
document.addEventListener('DOMContentLoaded', function() {
    // Get all game cards by class name
    var gameCards = document.querySelectorAll('.game-card');

    // Loop through each game card and add click event listener
    gameCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Get the URL of the game page from the data-url attribute
            var gameUrl = card.getAttribute('data-url');
            
            // Redirect to the game page
            redirectToGame(gameUrl);
        });
    });
});
