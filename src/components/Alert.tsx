export default function ResultAlert(outcome: 0 | 1 | -1) {
  if (outcome === 0) window.alert("It's a tie!");
  else if (outcome === 1) window.alert("You win! 🎉");
  else window.alert("Computer wins 😔");
}
