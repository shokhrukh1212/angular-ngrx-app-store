import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const AddBook = createAction('[Book] Add Book', props<{ book: Book }>());
export const DeleteBook = createAction(
  '[Book] Delete Book',
  props<{ id: string }>()
);
