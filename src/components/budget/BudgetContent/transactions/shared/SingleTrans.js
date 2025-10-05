import React from 'react'

import { CurrencyDollar, PencilLine, Trash } from 'phosphor-react'
import { Button } from 'components/ui'

const SingleTrans = ({Transaction , removeTransactionId}) => {
  return (
    <div className="trans_item">

      <div className={` trans_item-icon ${Transaction.type === 'expense' ? 'error' : '' }`}>
        <CurrencyDollar />
      </div>
      <div className="trans_item-data">
        <h4> {Transaction.title} </h4>
        <div>
          <small> ${Transaction.amount} </small>,
          <small>{Transaction.date}</small>,
          <small>{Transaction.type}</small>
        </div>

      </div>
      <div className="trans_item-cta">

        <Button icon>
          <PencilLine />
        </Button>
        <Button type="error" icon onClick={()=> removeTransactionId(Transaction.id)}>
          <Trash />
        </Button>
      </div>
    </div>
  )
}

export default SingleTrans