import React, { useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';


export const Transaction =({transaction}) => {

    const {deleteTransaction } =useContext(GlobalContext);

    return (
        <div>
              <li className={transaction.transactionAmount < 0 ? 'minus' : 'plus'}>
                   {transaction.description}
                    <span>${transaction.transactionAmount}</span>
                    <button onClick={()=>deleteTransaction(transaction.id)} className='delete-btn'>X</button>
             </li>
        </div>
    )
}


