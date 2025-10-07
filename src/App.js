import BudgetPage from "pages/BudgetPage";
import { TransactionsProvider } from "services/contexts/TransactionsContext";
import { CategoriesProvider } from 'services/contexts/CategoriesContext'
function App() {
  return (
    <>
      <TransactionsProvider>
        <CategoriesProvider>
          <BudgetPage />
         </CategoriesProvider>
      </TransactionsProvider>
    </>
  );
}

export default App;
