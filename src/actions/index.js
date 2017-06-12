/**
 * Created by gjm19_000 on 6/11/2017.
 */
export function selectBook(book) {
    // selectBook is an action creator, it needs to return an action,
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }

}
