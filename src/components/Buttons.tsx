import "../styles/Buttons.css";

// -This will be used as an object holding certain values that will be passed
// into a function
// -it holds a string named "label" that can only be rock, paper, or scissor
// -it also holds a function named onSelect that takes a string value that can
//  only be a string from "label." it also returns void, as it passes its value
//  back to the parent, which will determine what to do with it
type Props = {
  label: "rock" | "paper" | "scissors";
  onSelect: (choice: Props["label"]) => void;
};

/* Component function that contains the code for the button */
// -it takes a string from label and will also take a string, that will be
// named choice, that is strictly a string from label.
// -the onClick of the button ultimately returns void, as what the button
//  actually does is coded else where, but onSelect(label) allows the buttons
//  to be unique based on what label was passed into the button
export default function Button({ label, onSelect }: Props) {
  return (
    <button className="button" onClick={() => onSelect(label)}>
      {label.toUpperCase()}
    </button>
  );
}
