/**
 * Created by gjm19_000 on 6/6/2017.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                    <li
                        key={book.title}
                        onClick={ () => this.props.selectBook(book) }
                        className="list-group-item">
                        {book.title}
                    </li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>

        )
    }
}

// any change in the state will trigger this function to re-render
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    return {
        books:state.books
    };
}

// Anything that returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook:selectBook }, dispatch);
}


// connect function will take a function and a component
// then return a container
// Promote BookList from a component to a container
// - it needs to know about this new dispatch method, selectBook.
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);