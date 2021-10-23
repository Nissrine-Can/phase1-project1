let section
let form
let favColumn

document.addEventListener("DOMContentLoaded", () => {
    section = document.getElementById('main-section');
    form = document.getElementById('search-bar');
    favColumn = document.querySelector('.fav-column');
    init()
})

let searchQuery= "";
let items = [];

function init() {
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = document.querySelector('input').value;
        searchQuery = input;
        fetchBooks();
        form.reset();
    })
}


function fetchBooks() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
    .then(resp => resp.json())
    .then(resp => resp.items.forEach(item => {renderBooks(item)
        items.push(item)
    }))
}

function renderBooks(item) {
    const bookCard = document.createElement('card');
    bookCard.id = `book-${item.id}`;
    bookCard.className = 'card';

    const image = document.createElement('img');
    image.src = item.volumeInfo.imageLinks.thumbnail;
    image.alt = `${item.volumeInfo.title} image`;
    image.className = 'card-img';

    const divContentFooter = document.createElement('div');
    divContentFooter.className = 'divContentFooter';

    const divContent = document.createElement('div');
    divContent.className= 'card-content';

    const title = document.createElement('h4');
    title.textContent = item.volumeInfo.title;
    title.className = 'card-title';

    const authors = document.createElement('p');
    authors.textContent = item.volumeInfo.authors.join(', ');
    authors.className = 'card-author';

    const publisher = document.createElement('p');
    publisher.textContent = item.volumeInfo.publisher;
    publisher.className = 'card-publisher';

    divContent.append(title, authors, publisher);

    const divFooter = document.createElement('div');
    divFooter.className = 'card-footer';

    const likeBtn = document.createElement('button');
    likeBtn.textContent = 'Like';
    likeBtn.className = 'btn-like';
    likeBtn.addEventListener('click', (e) => {
        console.log('click')
        likeBtn.classList.toggle('active');
        favReads(item);
    
    })

    const previewLink = document.createElement('a');
    previewLink.textContent = 'Preview Link';
    previewLink.className = 'preview-btn';
    previewLink.href = item.volumeInfo.previewLink;
    
    divFooter.append(likeBtn, previewLink);
    divContentFooter.append(divContent, divFooter);
    bookCard.append(image, divContentFooter);
    section.appendChild(bookCard);

}


function favReads(item) {
    

    const favUl = document.createElement('ul');
    favUl.className = 'fav-ul';

    const deleteDiv = document.createElement('div');
    deleteDiv.className = 'delete-div';

    const liDeleteBtn = document.createElement('button');
    liDeleteBtn.textContent = " X ";
    liDeleteBtn.className = 'liDeleteBtn';
    liDeleteBtn.addEventListener('click', handleDelete)

    const favLi = document.createElement('li');
    favLi.className = 'fav-li';
    favLi.textContent = item.volumeInfo.title;
    favLi.id = `book-${item.id}`;
    
    deleteDiv.append(liDeleteBtn, favLi)
    favUl.append(deleteDiv);
    favColumn.appendChild(favUl);
    

}
function handleDelete(e) {

    const favLi = e.target.parentNode.querySelector("li")
    let id = favLi.id;

    e.target.parentNode.remove();
  
    document.getElementById(id).querySelector('.btn-like').classList.remove('active');
}



