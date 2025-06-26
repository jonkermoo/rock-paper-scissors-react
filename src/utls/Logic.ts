/* Possible hand choices. Used literal union to ensure that type Choice can only
   be "rock", "paper", "scissors" */
export type Choice = "rock" | "paper" | "scissors";

/* Logic for cpu making a choice */
// - const randomChoice is a function that will return some value
// - because randomChoice = (), it has an empty parameter
// - (): Choice => means that whatever value is returned is restricted to the
//   values that Choice can be (rock, paper, scissors)
export const randomChoice = (): Choice => {
  // -const choices is an array of 3 choices
  const choices: Choice[] = ["rock", "paper", "scissors"];
  // -the function will return an element from the choices array
  return choices[Math.floor(Math.random() * choices.length)];
};

/* Winner Logic */
// -const decideWinner is a function that takes parameters player and cpu
//  and the player and cpu value can only be something from type Choice
// -the decideWinner function can only return values of 0, 1, and -1, as
//  indicated by : 0 | 1 | -1
export const decideWinner = (player: Choice, cpu: Choice): 0 | 1 | -1 => {
  if (player === cpu) return 0;
  if (
    (player === "rock" && cpu === "scissors") ||
    (player === "paper" && cpu === "rock") ||
    (player === "scissors" && cpu === "paper")
  )
    return 1;
  else {
    return -1;
  }
}