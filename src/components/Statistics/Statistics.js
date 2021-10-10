import React from 'react';
import PropTypes from 'prop-types';

//import Notification from '../Notification/index';

//import s from './statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positiveFeedbacks }) {
 	return (
		<>
			<p>Good:{good}</p>
			<p>Neutral:{neutral}</p>
			<p>Bad:{bad}</p>
			<p>Total:{total}</p>
			<p>Positive feedback:{positiveFeedbacks}%</p>
		</>
	);
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacks: PropTypes.number.isRequired,
}
