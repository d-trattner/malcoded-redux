/* STATE (ACTUAL STORE) */

import { Currency } from './../models/currency';
export interface State {
    amount: number;
    currencies: Currency[];
}

/* REDUCER LIST TO INIT STORE IN APPMODULE */

import * as fromAmount from './amount';
import * as fromCurrency from './currency';

export const reducers = {
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer
};

/* SELECTORS */

export const getAmountState = (state: State) => state.amount;

export const getCurrencyRates = (state: State) => state.currencies;
