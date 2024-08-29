function loadHeader() {
    fetch('https://umainternational.github.io/umainternational/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

document.addEventListener('DOMContentLoaded', loadHeader);
