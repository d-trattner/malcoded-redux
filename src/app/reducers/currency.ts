/*
The Principle of Immutable Objects & Pure Functions
In the beginning of this article I mentioned, that reducers have to be pure functions.
So, what is a pure function?
A pure function is called pure, if it produces always the same output (return) when given the same input (parameter).
Deterministic functions like this are especially easy to debug and test.

Pure Function
function add(a, b){
    return a+b;
}

Impure Function
let c = 1;
function add(a, b){
    return a+b+c;
}

Also, a pure function is not allowed to produce any side effects.
This is done, to ensue, that a function can always do it's job, without depending on any other function to be called before.

*/

import { Currency } from './../models/currency';
import * as currency from '../actions/currency';

export function reducer(state = [], action: currency.CurrenciesUpdatedAction) {
    switch (action.type) {
        case currency.CURRENCIESUPDATED:
            return action.payload;
        default:
            return state;
    }
}
