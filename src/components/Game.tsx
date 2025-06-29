import { useState } from "react";
import { decideWinner, randomChoice, type Choice } from "../utls/Logic";
import "../styles/Game.css";
import ResultAlert from "./Alert";
import Button from "./Buttons";

/* Actual Game Running */
export default function Game() {
  /* useStates */
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [cpuChoice, setCpuChoice] = useState<Choice | null>(null);

  const HandleSelect = (choice: Choice) => {
    const cpu = randomChoice();
    setPlayerChoice(choice);
    setCpuChoice(cpu);

    // bruh I can't run npm run build with yellow erros
    console.log("Player: " + playerChoice);
    console.log("CPU: " + cpuChoice);

    const outcome = decideWinner(choice, cpu);
    ResultAlert(outcome);
  };

  return (
    <div className="buttons">
      {["rock", "paper", "scissors"].map((c) => (
        <Button key={c} label={c as Choice} onSelect={HandleSelect} />
      ))}
    </div>
  );
}
