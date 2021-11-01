import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome to my Weather App!</h1>
      <p>
        Click <Link to="/weather">here</Link> to go directly to the weather app
        or you can click above on the navigation bar.
      </p>
    </section>
  );
};

export default Welcome;
