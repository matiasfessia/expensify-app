import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'jbjkrbkb',
    description: 'car fuel',
    notes: 'full tank for two weeks',
    amount: 220000,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // by date or by amount
    startDate: undefined,
    endDate: undefined,
  }
}
