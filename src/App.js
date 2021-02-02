import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
      <Weather defaultCity="New York"/>
      <footer>
        This website was created by Eleanor Barr-Sim and is {" "} 
      <a href="https://github.com/ebarrsim/ebarrsim-weather-react" target="_blank" rel="noreferrer">
      open-sourced on Github
      </a>
      </footer>
    </div>
    </div>
  );
}

export default App;
