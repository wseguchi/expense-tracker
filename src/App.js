import { AddTransaction } from './AddTransaction';
import './App.css';
import { Balance } from './Balance';
import { Header } from './Header.js';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { GlobalProvider } from './context/GlobalState';
import Credits from './Credits';

function App() {
  return (
    <div id='container'>
      <GlobalProvider className='main'>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <Credits />
      </GlobalProvider>
    </div>
  );
}

export default App;
