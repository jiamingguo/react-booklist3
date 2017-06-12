/**
 * Created by gjm19_000 on 6/6/2017.
 */
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import FavoriteBooks from './reducer_favorite_books';

// this reducer will add a key to the global application state called books where the key is books and
// the value is whatever returned from book reducer
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    favoriteBooks: FavoriteBooks
})

export default rootReducer;