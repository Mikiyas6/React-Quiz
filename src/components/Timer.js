import { useEffect } from "react";
function formatToMinutesSeconds(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`; // Format seconds to always be 2 digits
}
function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">{formatToMinutesSeconds(secondsRemaining)}</div>
  );
}

export default Timer;
