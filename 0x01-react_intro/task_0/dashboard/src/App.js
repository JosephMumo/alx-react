import logo from './img.jpg'

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
      </body>
      <footer className="App-footer">
        <hr />
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
