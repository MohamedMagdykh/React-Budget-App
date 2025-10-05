import BudgetPage from "pages/BudgetPage";
import { TransactionsProvider } from "services/contexts/TransactionsContext";

function App() {
  return (
    <>
      <TransactionsProvider>
          <BudgetPage />
      </TransactionsProvider>
    </>
  );
}

export default App;
