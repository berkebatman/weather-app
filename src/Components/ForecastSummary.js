import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature } = props;

  return (
    <div className="forecast-summary">
      <div className="foreast-summary__date">{date}</div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__icon">{icon}</div>
      <div className="forecast-summary__icon">{temperature.max}&&deg;C</div>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
