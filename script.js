// JavaScript code for interaction between Home Page and About Us Page
document.addEventListener('DOMContentLoaded', function() {
    // Get the About Us link element
    var aboutLink = document.querySelector('a[href="about.html"]');

    // Add click event listener to the About Us link
    aboutLink.addEventListener('click', function() {
        // Display a confirmation message
        var confirmed = confirm('Are you sure you want to learn more about us?');
        // If user cancels, do nothing
        if (!confirmed) {
            event.preventDefault();
        }
    });
});
