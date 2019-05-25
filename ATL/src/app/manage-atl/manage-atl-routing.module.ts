import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { ManageLibraryComponent } from './manage-library/manage-library.component';
import { AddBookComponent } from './add-book/add-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { NotifyLocationComponent } from './notify-location/notify-location.component';
import { RenewBookComponent } from './renew-book/renew-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { SearchBookComponent } from './search-book/search-book.component';

const manageAtlRoutingRoutes: Routes = [
  {
    path: '',
    component: ManageLibraryComponent,
    children: [
      {
        path: '',
        component: AddBookComponent
      },
      {
        path: 'issue-book',
        component: IssueBookComponent
      },
      {
        path: 'notify-location',
        component: NotifyLocationComponent
      },
      {
        path : 'renew-book',
        component : RenewBookComponent
      },
      {
        path : 'return-book',
        component : ReturnBookComponent
      },
      {
        path : 'search-book',
        component : SearchBookComponent
      }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(manageAtlRoutingRoutes)
  ],
  exports: [RouterModule]
})
export class ManageAtlRoutingModule { }
