/* eslint-disable react/prop-types */
import "../Styles/App.css";
import { React } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  const { forecasts } = props;
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        date={forecasts.date}
        description={forecasts.description}
        icon={forecasts.icon}
        temperature={forecasts.temperature.max}
      />
    </div>
  );
};

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
