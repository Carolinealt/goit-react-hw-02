// import css from "./Feedback.module.css";

const Feedback = ({ reviews }) => {
  const total = reviews.good + reviews.neutral + reviews.bad;
  return (
    <>
      <p>Good: {reviews.good}</p>
      <p>Neutral: {reviews.neutral}</p>
      <p>Bad: {reviews.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {Math.round((reviews.good / total) * 100)}</p>
    </>
  );
};
export default Feedback;
