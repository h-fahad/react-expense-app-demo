import React,{createContext , useReducer} from 'react';

//import the Reducer
import AppReducer from './AppReducer'

//Create the initial state
const initialState={
    transaction: []
}

//Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for Global Context
export const GlobalProvider = ({children}) => {

    const [state , dispatch] = useReducer(AppReducer, initialState)

    //actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transaction,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}