import { useState } from "react";

const GetForecast = (props) => {
  const [message, setMessage] = useState("");

  async function forecast(props) {
    const response = await fetch(
      "http://api.weatherstack.com/current?access_key=" + process.env.REACT_APP_API_KEY + "&query=" +
        props.onData.enteredLat +
        "," +
        props.onData.enteredLong +
        "&units=f"
    );
    const data = await response.json();
    if (data.error) {
      if (data.error.code === 104) {
        setMessage("API monthly limit reached");
      } else {
        setMessage("Error");
      }
    } else {
      let message =
        data.current.weather_descriptions[0] +
        ". It is currently " +
        data.current.temperature +
        " degrees out. It feels like " +
        data.current.feelslike +
        " degrees. The local time is " +
        data.location.localtime.slice(-5) +
        ". ";
      setMessage(message);
    }
  }

  forecast(props);

  const message_styles = {
    color: "#966996",
    font: "20px",
  };

  return <p style={message_styles}>{message}</p>;
};

export default GetForecast;
