import React from 'react'
import PropTypes from 'prop-types'
import MajorClock from './MajorClock';

const SplitTimes = ({ splits = [] }) => {
    return splits.map((v, k) => (
        <MajorClock key={k} milliseconds={v} ></MajorClock>
    ))
}

SplitTimes.propTypes = {
    splits: PropTypes.arrayOf(PropTypes.number)
}

export default SplitTimes