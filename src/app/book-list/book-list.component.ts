import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private store: Store<{ books: Book[] }>) {
    this.books$ = store.pipe(select('books'));
  }

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ book: { id, title, author } }));
  }

  removeBook(id: string) {
    this.store.dispatch(RemoveBook({ id }));
  }
}
