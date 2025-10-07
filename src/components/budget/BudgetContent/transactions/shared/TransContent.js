import React, { useContext } from 'react'
import { TransactionsContext } from 'services/contexts/TransactionsContext'

import SingleTrans from "./SingleTrans"

const TransContent = () => {
const{transactions , loading , error } = useContext(TransactionsContext)


  return (
    <div className="trans_content">
    { transactions.length && transactions && !loading && !error ?
      (transactions.map((data)=> (
       <SingleTrans Transaction = {data}  key={data.id} />
      
      ))) :  (<></>) 

     }
  
    { !transactions.length && transactions &&!loading && !error && <p   className="no-data text-center" > No data </p>} 

    {loading && <p className='text-center'> loading ... </p>}

      {error && !loading &&  <p className='errorFont text-center'> {error}  </p>}
     
    </div>
  )
}

export default TransContent