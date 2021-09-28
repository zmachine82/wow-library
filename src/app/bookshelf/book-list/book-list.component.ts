import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Output() bookWasSelected = new EventEmitter<Book>();



  @Input("myBooks") bookListArray: Book[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.bookListArray)
    console.log('')
  }

  onBookSelected(book: Book){
    this.bookWasSelected.emit(book);
  }

}
