import React from "react";

function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎉";
  if (percentage >= 80 && percentage < 100) emoji = "⭐";
  if (percentage >= 0 && percentage < 80) emoji = "😒";
  if (percentage === 0) emoji = "🤣";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored {points} out of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
