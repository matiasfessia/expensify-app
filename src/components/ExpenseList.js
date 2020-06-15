import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
  <div>
    {props.expenses.map(expense => <ExpenseListItem expense={expense} />)}
  </div>
);

const mapStateToProps = ({ expenses }) => ({
  expenses
});

export default connect(mapStateToProps)(ExpenseList);
