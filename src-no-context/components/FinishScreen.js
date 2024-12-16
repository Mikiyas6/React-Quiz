function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="result result--label">
        You Fucking {percentage <= 10 && "Retard🥴"}
        {percentage > 10 && percentage <= 40 && "Clown🤡"}
        {percentage > 40 && percentage <= 60 && "Dummy🤪"}
        {percentage > 60 &&
          percentage <= 80 &&
          "Beginner🧑‍🍼. Go back and study ❗ ❗ ❗  "}
        {percentage > 80 && percentage <= 100 && "Genius🤓"}
      </p>
      <p className="highscore">Highscore: {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
