import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [isReset, setIsReset] = useState(false);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [val, setVal] = useState(() => {
    const localData = window.localStorage.getItem("rates");
    if (localData !== "undefined") {
      return JSON.parse(localData);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("rates", JSON.stringify(val));
  }, [val]);
  
  useEffect(() => {
    setTotalFeedback(val.good + val.neutral + val.bad);
  }, [val]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setVal({ good: 0, neutral: 0, bad: 0 });
      setIsReset(false);
      return;
    }
    setVal({ ...val, [feedbackType]: val[feedbackType] + 1 });
    setIsReset(true);
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} isReset={isReset} />
      {totalFeedback === 0 ? (
        <Notification total={totalFeedback} />
      ) : (
        <Feedback reviews={val} total={totalFeedback} />
      )}
    </>
  );
}

export default App;
