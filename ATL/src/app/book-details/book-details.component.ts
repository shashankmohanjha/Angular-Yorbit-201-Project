import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../model/book';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  constructor(private route: ActivatedRoute,
    private bookService: BookService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookService.getAllBooks().subscribe((allBooks) => {
        allBooks.filter((book) => {
          if (book.ISBN == params['isbn']) {
            this.book = book;
          }
        })
      })
    }
    )
  }

  getBook(isbn: string) {
    this.route.params.subscribe(params => {
      this.bookService.getBook(params['isbn']).subscribe(book => {
        this.book = book;
      })
    })
  }

  
/*   async getBook(ISBN: string) {
    this.book = await this.bookService.getBook(ISBN);
  } */
}
