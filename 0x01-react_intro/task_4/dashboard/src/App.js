import logo from './img.jpg'
import './utils'
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email: </label>
        <input type="email"></input>
        <label for="password">Password: </label>
        <input type="password"></input>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <hr />
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;