import { useState } from "react";
import Input from "./Input";
import GetForecast from "./GetForecast";

const GetLocationData = (props) => {
  const [enteredLocation, setEnteredLocation] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [start, setStart] = useState(false);

  async function enteredLocationHandler(enteredLocation) {
    if (enteredLocation.length === 0) {
      return setError(true);
    }

    const response = await fetch(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(enteredLocation) +
        ".json?access_token=" + process.env.REACT_APP_API_TOKEN
    );
    const data = await response.json();
    if (data.message === "Forbidden" || data.features.length === 0) {
      setError(true);
    } else {
      setError(false);
      setEnteredLocation(data.features[0].place_name);
      setData({
        enteredLat: data.features[0].center[1],
        enteredLong: data.features[0].center[0],
        enteredLocate: data.features[0].place_name,
      });
      setStart(true);
    }
  }

  const error_styles = {
    color: "#d3572c",
    fontSize: "20px",
  };

  const location_styles = {
    color: "#15a7ea",
    fontSize: "20px",
  };

  return (
    <div>
      <Input onEnteredLocation={enteredLocationHandler} />
      {!error && <p style={location_styles}>{enteredLocation}</p>}
      {error && <p style={error_styles}>There is an error try again</p>}
      {start && <GetForecast onData={data} />}
    </div>
  );
};

export default GetLocationData;
