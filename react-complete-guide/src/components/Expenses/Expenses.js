import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

function Expenses(props){

    const [filterYear, setEnteredFilter] = useState('2021');


    const filterChangeHandler = (expenseFilterData) => {
        setEnteredFilter(expenseFilterData);
        console.log(expenseFilterData);
    }

    return(
        <div>

            
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler}/>
                {   
                    props.items.map((expense) => <ExpenseItem
                                                    key={expense.id}
                                                    title={expense.title} 
                                                    amount={expense.amount} 
                                                    date={expense.date}/> )
                }
            </Card>
        </div>
    );
}

export default Expenses;