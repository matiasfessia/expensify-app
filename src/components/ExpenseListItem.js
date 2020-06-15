import React from 'react';

const ExpenseListItem = ({ expense }) => (
  <div>
    <p>{expense.description} ${expense.amount}</p>
  </div>
);

export default ExpenseListItem
