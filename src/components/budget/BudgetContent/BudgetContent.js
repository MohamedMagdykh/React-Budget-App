import React from 'react'

import './BudgetContent.css'
import { Tabs, Tab } from 'components/ui'

import Transactions from "./transactions/Transactions"

const BudgetContent = () => {
  return (
    <div className="budget_content">
      <div className="container">
        <Tabs>
          <Tab title="data">
            <Transactions />
          </Tab>

          <Tab title="income">
            content 2
          </Tab>

          <Tab title="expanses">
            content 3
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default BudgetContent