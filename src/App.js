import logo from "./logo.svg";
import cube from "./content/cubee.webp";
import "./App.css";
import WordAnimation from "./components/AnimatedLetters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cube} className="App-logo" alt="logo" />

        <WordAnimation />
        <p>Coming soon...</p>
      </header>
    </div>
  );
}

export default App;
