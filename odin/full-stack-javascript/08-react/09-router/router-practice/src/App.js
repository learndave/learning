import { Link, Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
