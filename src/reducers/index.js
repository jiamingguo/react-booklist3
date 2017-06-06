/**
 * Created by gjm19_000 on 6/6/2017.
 */
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
})

export default rootReducer;