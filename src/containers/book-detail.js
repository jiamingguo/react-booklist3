/**
 * Created by gjm19_000 on 6/12/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        // same as previous book-list state issue.
        // at first, application state is null, so nothing to display, neither props
        if (!this.props.book) {
            return <div>Select a book to get started</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div> {this.props.book.title}</div>
                <div>{this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book : state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);