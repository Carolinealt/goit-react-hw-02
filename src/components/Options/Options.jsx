import css from "./Options.module.css";

const Options = ({ updateFeedback, isReset }) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>good</button>
      <button onClick={() => updateFeedback("neutral")}>neutral</button>
      <button onClick={() => updateFeedback("bad")}>bad</button>
      {isReset && (
        <button onClick={() => updateFeedback("reset")}>reset</button>
      )}
    </>
  );
};

export default Options;
