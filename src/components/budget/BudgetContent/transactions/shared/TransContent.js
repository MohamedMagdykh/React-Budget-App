import React, { useContext } from 'react'
import { TransactionsContext } from 'services/contexts/TransactionsContext'

import SingleTrans from "./SingleTrans"

const TransContent = () => {
const{transactions , loading , error , removeTransaction } = useContext(TransactionsContext)


  return (
    <div className="trans_content">
    { transactions.length && !loading && !error ?
      (transactions.map((data)=> (
       <SingleTrans Transaction = {data} removeTransactionId= {removeTransaction} key={data.id} />
      
      ))) :  (<></>) 

     }
  
    { !transactions.length && !loading && !error && <p   className="no-data" > No data </p>} 

    {loading && <p> loading ... </p>}

      {error && !loading &&  <p> {error}  </p>}
     
    </div>
  )
}

export default TransContent