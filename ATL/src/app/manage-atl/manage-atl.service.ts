import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';

@Injectable({
  providedIn: 'root'
})
export class ManageAtlService {

  URL: string = 'http://localhost:3000/books';
  constructor(private httpClient:HttpClient, private bookService: BookService) { }

  //add book to the library
  addBook(book: Book) {
     this.httpClient.post(this.URL,book);
  }


 /*  searchBook(searchKey: string) : Promise<Book>  {
   return this.bookService.searchBook(searchKey);
  } */
}
