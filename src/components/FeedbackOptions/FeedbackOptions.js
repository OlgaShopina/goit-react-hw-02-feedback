import React from 'react';
import PropTypes from 'prop-types';
import s from './feedbackOptions.module.css';

export default function FeedbackOptions({ options, onIncrement }) {
    const optionsArr = Object.keys(options);
    return (
        <>
    <ul className={s.box}>
        {optionsArr.map(option => (
            <li id={option} className={s.list}>
                <button onClick={onIncrement} id={option} className={s.btn}>
                 {option}   
                </button>
            </li>
        ))}
            </ul >
            </>
)
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

