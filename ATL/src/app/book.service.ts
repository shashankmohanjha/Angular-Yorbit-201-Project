import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Book } from './model/book';
import { filter, map } from 'rxjs/operators';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  book: Book;
  URL: string = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }

  // Get all books
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.URL);
  }

  //Get Book by ISBN
  getBook(ISBN: string): Observable<Book> {
    return this.getAllBooks()
    .pipe(
      map(response => response.find(book => book.ISBN === ISBN))
    );
  }

}
