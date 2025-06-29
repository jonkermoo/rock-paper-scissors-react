import Game from "./components/Game";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>
      <div className="game">
        <Game></Game>
      </div>
    </div>
  );
}

export default App;
