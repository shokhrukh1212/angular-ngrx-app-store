import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const AddBook = createAction('[Book] Add Book', props<{ book: Book }>());
export const AddBookSuccess = createAction(
  '[Book] Add Book Success',
  props<{ book: Book }>()
);
export const AddBookFailure = createAction(
  '[Book] Add Book Failure',
  props<{ error: any }>()
);

export const RemoveBook = createAction(
  '[Book] Remove Book',
  props<{ id: string }>()
);
