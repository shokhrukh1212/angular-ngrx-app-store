import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';
import { AppState } from './app.state';
import { provideEffects } from '@ngrx/effects';
import { BookEffects } from './books/book.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore<AppState>({ book: BookReducer }),
    provideEffects([BookEffects]),
  ],
};
