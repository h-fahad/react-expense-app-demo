import './App.css';

//Import Components
import { Header } from './components/Header';
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionList } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />

        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
