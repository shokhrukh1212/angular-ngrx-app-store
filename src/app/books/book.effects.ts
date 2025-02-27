import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookService } from './book.service';
import * as bookActions from './book.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
@Injectable()
export class BookEffects {
  private actions$ = inject(Actions);

  // This is an NgRx Effect that responds to 'AddBook' actions
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      // Listen for 'AddBook' actions
      ofType(bookActions.AddBook),

      // For each AddBook action, call 'addBook' on the book service
      // 'mergeMap' allows multiple observables to be returned
      mergeMap((action) =>
        this.bookService.addBook(action.book).pipe(
          // If the 'addBook' call is successful, dispatch 'AddBookSuccess' action with the book data.
          map((book) => bookActions.AddBookSuccess({ book })),

          // If the 'addBook' call fails, dispatch 'AddBookFailure' actions with the error
          catchError((error) => of(bookActions.AddBookFailure({ error })))
        )
      )
    )
  );

  constructor(private bookService: BookService) {}
}
