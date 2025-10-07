import React, { createContext,  useCallback,  useEffect, useReducer, useRef } from "react";
import { addTransaction, deleteTransaction, getAllTransactions, updateTransaction } from "services/apis/TransactionsApi";
import { TransactionsReducer, initialState } from "services/reducers/TransactionsReducer"; 

export const TransactionsContext = createContext();
export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionsReducer, initialState);
    
const isAmountted = useRef(false);
     const getAllTransaction =useCallback( async ()=> {
        dispatch({ type: "FETCH_START" });
      try{
         
       const getData = await getAllTransactions();
        dispatch({ type: "FETCH_SUCCESS"  , payload: getData });  
      }

      catch(err){
       dispatch({ type: "FETCH_ERROR"  , payload :err.message || "Unknown error" });
      }
   
     } , []
     )
const addNewTransaction = async (data)=> {
      dispatch({ type: "FETCH_START" });
    try{
        const addData = await addTransaction(data) 
        dispatch({ type: "ADD_TRANSACTION", payload: addData });

      
    }
    catch(err){
         dispatch({ type: "FETCH_ERROR"  , payload: err.message || "Unknown error" });
    }
   
}
const removeTransaction = async (id)=> {
    dispatch({ type: "FETCH_START" });
    try{
         await deleteTransaction(id) 
        dispatch({ type: "DELETE_TRANSACTION", payload: id });
        
    }
    catch(err){
         dispatch({ type: "FETCH_ERROR"  , payload: err.message || "Unknown error" });
    }
    
}
const editTransaction = async (id , data)=> {
    dispatch({ type: "FETCH_START" });
    try{
        const UpdateData = await updateTransaction(id , data) 
         dispatch({ type: "UPDATE_TRANSACTION", payload: UpdateData });
        
    }
    catch(err){
      dispatch({ type: "FETCH_ERROR"  , payload: err.message || "Unknown error" });
    }

}
  useEffect(() => {
    if(isAmountted.current) return;
      getAllTransaction();
      isAmountted.current = true;
  }, [getAllTransaction]);
return (
    <TransactionsContext.Provider
      value={{
        ...state ,
        addNewTransaction,
        editTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
