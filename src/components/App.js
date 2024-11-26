import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
const initialState = {
  questions: [],
  // Different status that the application is going to be in---- 'loading', 'error', 'ready','active','finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload.answer,
        points: state.points + action.payload.point,
      };
    case "prev":
      return { ...state, index: state.index > 0 ? state.index - 1 : 0 };
    case "next":
      return {
        ...state,
        index:
          state.index < action.payload - 1
            ? state.index + 1
            : action.payload - 1,
        answer: null,
      };
    default:
      throw new Error("Action unknown");
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points } = state;
  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) =>
        console.log(dispatch({ type: "dataReceived", payload: data }))
      )
      .catch((err) => console.log(dispatch({ type: "dataFailed" })));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            questions={questions}
            dispatch={dispatch}
            index={index}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}