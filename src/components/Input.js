import { useState } from "react";

import "./Input.css";

const Input = (props) => {
  const [enteredLocation, setEnteredLocation] = useState("");

  const locationEnteredHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onEnteredLocation(enteredLocation);
    setEnteredLocation("");
  };
  
  const prompt = {
    color: "#3e91c1",
    fontSize: "20px"
  }

  return (
    <form className="goodCSS" onSubmit={submitHandler}>
      <div className="prompt-text">
        <label style={prompt}>
          Enter location to check: 
        </label>
      </div>
      <input
            type="text"
            value={enteredLocation}
            onChange={locationEnteredHandler}
            placeholder="Location"
          />
      <div className="prompt-text__button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Input;
