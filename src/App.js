import { AddTransaction } from './AddTransaction';
import './App.css';
import { Balance } from './Balance';
import { Header } from './Header.js';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div id='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
