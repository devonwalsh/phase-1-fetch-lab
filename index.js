const configObj = {
  mode: "cors",
  headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
  }
  
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books', configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const books = json;
    renderBooks(books);
  })
} 

function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
