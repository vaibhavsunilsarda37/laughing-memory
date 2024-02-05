function showLaughter() {
    var laughterContainer = document.getElementById('laughterContainer');
    var laughterButton = document.getElementById('laughterButton');

    if (laughterContainer.style.display === 'none') {
        laughterContainer.style.display = 'block';
        laughterButton.innerHTML = 'Hide Laughter';
    } else {
        laughterContainer.style.display = 'none';
        laughterButton.innerHTML = 'Show Laughter';
    }
}