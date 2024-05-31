// import css from "./Feedback.module.css";

const Feedback = ({ reviews, total, positive }) => {
  return (
    <>
      <p>Good: {reviews.good}</p>
      <p>Neutral: {reviews.neutral}</p>
      <p>Bad: {reviews.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}</p>
    </>
  );
};
export default Feedback;
