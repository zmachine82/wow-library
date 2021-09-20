import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = ['wfwfw', 'wdfqfwf']

  constructor() { }

  ngOnInit(): void {
  }

  addABook() {
    this.books.push('dsfnqwf');

    console.log(this.books)
  }

}
