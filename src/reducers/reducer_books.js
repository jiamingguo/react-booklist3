/**
 * Created by gjm19_000 on 6/6/2017.
 */
/*
Reducers: return a piece of application state

Application state: {activebooks:xxx, allbooks:xxx}

So corresponding two reducers for each field in application state
 */

export default function () {
    return [
        {title: 'Javascript: the Good Parts', pages: 101},
        {title: 'Harry Potter', pages: 300},
        {title: 'The Dark Tower', pages: 400},
        {title: 'Eloquent Ruby', pages: 1}
    ]
}
