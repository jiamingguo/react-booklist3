/**
 * Created by gjm19_000 on 6/6/2017.
 */
import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';

export default class App extends Component {
    render() {
        return (
            <div>
                <BookList />
            </div>
        );

    }

}