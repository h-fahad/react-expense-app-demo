import React, {useState, useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const [description,setDescription] = useState();
    const [transactionAmount,setTransactionAmount] = useState();

    const {addTransaction } =useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }
    
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div class="form-control">
                    <label for="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div class="form-control">
                    <label for="amount">Amount <br />
                          (negative - expense, positive - income)
                          </label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={transactionAmount}  onChange={(e)=>setTransactionAmount(e.target.value)} />
                </div>
                <button class="btn">Add transaction</button>
            </form>
        </div>
    )
}

