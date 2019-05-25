import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { ManageAtlService } from '../manage-atl.service';
import { BookDetailsComponent } from '../../book-details/book-details.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();
  constructor(private manageAtlService: ManageAtlService) { }

  ngOnInit() {
    this.book.category = '';
  }

  //add book
  addBook() {
    this.manageAtlService.addBook(this.book);
  }
}
