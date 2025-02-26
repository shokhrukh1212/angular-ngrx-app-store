import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from './book.actions';

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state, { book }) => [...state, book]),
  on(RemoveBook, (state, { id }) => state.filter((book) => book.id !== id))
);
