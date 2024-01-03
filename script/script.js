document.addEventListener('DOMContentLoaded', function () {
    var titleElement = document.getElementById('typewriter');
    var titleText = "Hi, I'm Daniel Johannes Tobing \"AKA\" (DANJO)";
    var i = 0;

    function typeWriter() {
        if (i < titleText.length) {
            titleElement.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust the interval as needed
        }
    }

    typeWriter();
});

function redirectToPortfolio() {
    window.location.href = "portfolio page.html";