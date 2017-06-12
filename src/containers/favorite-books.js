/**
 * Created by gjm19_000 on 6/8/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class FavoriteBookList extends Component {
    renderList() {
        return this.props.favoriteBooks.map((favoriteBook) => {
            return (
                <li
                    key={favoriteBook.title}
                    onClick={ () => this.props.selectBook(favoriteBook)}
                    className="list-group-item" >
                    {favoriteBook.title}
                </li>
            );

        });
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps (state) {
    return (
        {favoriteBooks: state.favoriteBooks}
    );
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators ({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBookList);