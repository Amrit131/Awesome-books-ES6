/* eslint-disable linebreak-style */
import Book from './book.js';

const book = document.getElementsByClassName('book-list')[0];

export default class display {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = display.getBooks();
    let dp = '';
    books.forEach((book, i) => {
      dp += `
                  <div class="allbooks">
                  <p>"${book.title}" by ${book.author}</p>
                  <button class="removeBtn">Remove</button>
                  </div>`;
    });
    book.innerHTML = dp;
  }

  static addBook() {
    const titleInput = document.querySelector('#title').value;
    const authorInput = document.querySelector('#author').value;
    if (titleInput !== '' && authorInput !== '') {
      const newBook = new Book(titleInput, authorInput);
      const books = display.getBooks();
      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books));
      this.displayBooks();
    }
  }

  static removeBook(id) {
    const books = display.getBooks();
    const bookIndex = books.findIndex((item, i) => i === id);
    books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
    this.displayBooks();
  }
}