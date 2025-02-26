import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  constructor(private store: Store<{ books: Book[] }>) {}

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ book: { id, title, author } }));
  }

  removeBook(id: string) {
    this.store.dispatch(RemoveBook({ id }));
  }
}
