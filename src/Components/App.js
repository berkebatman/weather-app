/* eslint-disable react/prop-types */
import "../Styles/App.css";
import { React } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
