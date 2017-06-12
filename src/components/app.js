/**
 * Created by gjm19_000 on 6/6/2017.
 */
import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import FavoriteBookList from '../containers/favorite-books';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
    render() {
        return (
            <div>
                <BookList />
                <FavoriteBookList/>
                <BookDetail/>
            </div>
        );
    }
}
