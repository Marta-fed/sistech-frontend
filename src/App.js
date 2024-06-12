import logo from './logo.svg';
import './App.css';

function App() { 
  let appLink = "Hello Sistech";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
      {appLink}
              </a>
      </header>
    </div>
  );
}

export default App;
