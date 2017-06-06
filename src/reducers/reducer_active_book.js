/**
 * Created by gjm19_000 on 6/6/2017.
 */
export default function (state = null, action ){
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}