import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
  {
    description = '',
    notes = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt
  }
})

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: 'rent', amount: 100 }));

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


