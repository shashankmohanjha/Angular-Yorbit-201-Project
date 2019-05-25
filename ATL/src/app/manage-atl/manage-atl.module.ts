import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageLibraryComponent } from './manage-library/manage-library.component';
import { ManageAtlRoutingModule } from './manage-atl-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { RenewBookComponent } from './renew-book/renew-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { NotifyLocationComponent } from './notify-location/notify-location.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManageLibraryComponent, AddBookComponent, SearchBookComponent, IssueBookComponent, RenewBookComponent, ReturnBookComponent, NotifyLocationComponent],
  imports: [
    CommonModule,
    ManageAtlRoutingModule,
    FormsModule
  ]
})
export class ManageAtlModule { }
