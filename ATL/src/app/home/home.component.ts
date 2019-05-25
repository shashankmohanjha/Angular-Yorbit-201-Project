import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBooks: any[];
  libraryBooks: Book[] = new Array();
  categories: string[] = new Array();
  allAuthors: string[] = new Array();
  filterCategories: string[] = new Array();
  filterAuthors: string[] = new Array();
  categoriesAfterFilter: string[] = new Array();
  isBookAvailable = false;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
    this.getAllAuthors();
    this.getAllCategories();
  }

  //get all books
  getAllBooks() {
    this.bookService.getAllBooks().subscribe((allBooks) => {
      this.allBooks = allBooks;
      this.libraryBooks = allBooks;
    })
  }

  //get all categories in sorted order
  getAllCategories() {
    this.bookService.getAllBooks().subscribe((allBooks) => {
      allBooks.forEach((book) => {
        if (!this.categories.includes(book.category)) {
          this.categories.push(book.category);
        }
        this.categories.sort();
        this.categoriesAfterFilter = this.categories;
      })
    })
  }

  //get all authors
  getAllAuthors() {
    this.bookService.getAllBooks().subscribe((allBooks) => {
      allBooks.forEach((book) => {
        if (!this.allAuthors.includes(book.author)) {
          this.allAuthors.push(book.author);
        }
        this.allAuthors.sort();
      })
    })
  }

  // Filter by category
  filterByCategory(category: string) {
    if (this.filterCategories.includes(category)) {
      this.filterCategories.splice(this.filterCategories.indexOf(category), 1);
    } else {
      this.filterCategories.push(category);
    }
    if (this.filterCategories.length == 0) {
      this.categoriesAfterFilter = this.categories;
      this.filterByAuthor('');
    } else {
      this.categoriesAfterFilter = this.filterCategories;
    }
    this.categoriesAfterFilter.sort();
    this.filterBooks();
  }

  //Filter By Author
  filterByAuthor(author: string) {
    this.libraryBooks = [];

    //filterAuthors consists list of unique authors to filter
    if (author != '') {
      if (this.filterAuthors.includes(author)) {
        this.filterAuthors.splice(this.filterAuthors.indexOf(author), 1);
      } else {
        this.filterAuthors.push(author);
      }
    }
    this.filterBooks();
  }

  //Filter all books
  filterBooks() {
    //if category and authors both selected
    //else if only authors selected
    if (this.filterCategories.length > 0 && this.filterAuthors.length > 0) {
      this.filterCategories.forEach((category) => {
        this.filterAuthors.forEach((author) => {
          this.allBooks.filter((book) => {
            if (book.category == category && book.author == author) {
              this.libraryBooks.push(book);
            }
          });
        })
      })
    } else if (this.filterAuthors.length > 0) {
      this.filterAuthors.forEach((author) => {
        this.allBooks.filter((book) => {
          if (book.author == author) {
            this.libraryBooks.push(book);
          }
        });
      })
    }
    //If no authors are selected
    if (this.filterAuthors.length == 0) {
      this.libraryBooks = this.allBooks;
    }
  }

  //If book is available by category then return true
  ifBookAvailableInCategory(category: string) {
    for (let book of this.libraryBooks) {
      if (book.category == category) {
        this.isBookAvailable = true;
        return true;
      }
    }
  }

  ifLibraryBooksAvailable() {
    return this.libraryBooks.length > 0;
  }
}
