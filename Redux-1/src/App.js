import { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let inputRef = useRef();
  let dispatch = useDispatch();
  let display = useSelector((store) =>{

    return store;
  });
  return (
    <div className="App">
      <input ref={inputRef}></input>
      <button
        onClick={() => {
          dispatch({ type: "addActors", data: inputRef.current.value });
        }}
      >
        Add Actors
      </button>
      <button
        onClick={() => {
          dispatch({ type: "addPolitician", data: inputRef.current.value });
        }}
      >
        Add Politicians
      </button>
      <button
        onClick={() => {
          dispatch({ type: "addCricketers", data: inputRef.current.value });
        }}
      >
        Add Cricketers
      </button>

      <h1>Actors:{display.actors.join()}</h1>
      <h1>Politicians:{display.politicians.join()}</h1>
      <h1>Cricketers:{display.cricketers.join()}</h1>

    </div>
  );
}

export default App;
