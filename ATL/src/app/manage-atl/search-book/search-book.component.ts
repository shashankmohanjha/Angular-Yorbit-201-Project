import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { ManageAtlService } from '../manage-atl.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  searchKey : string;
  book: Book;
  constructor(private manageAtlService: ManageAtlService) { }

  ngOnInit() {

  }

/*   searchBook() {
   this.manageAtlService.searchBook(this.searchKey).then((book) => {
     console.log(book);
     debugger
   });
  } */
}
