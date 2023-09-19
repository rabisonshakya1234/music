// Get references to the search input and button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "home") {
      window.location.href = "index.html";
    } else if (searchTerm === "about") {
      window.location.href = "about.html";
    } else if (searchTerm === "music") {
      window.location.href = "music.html";
    } else if (searchTerm === "contact") {
      window.location.href = "contact.html";
    } else {
      alert("Page not found!");
    }
  });