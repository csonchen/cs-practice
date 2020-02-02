import React from 'react'
import PropTypes from 'prop-types'

export default class StopWatch2 extends React.Component {
    render() {
        return (
            <>
                hello react.
            </>
        )
    }
}

const MajorClock = ({ milliseconds }) => {

}

MajorClock.propTypes = {
    milliseconds: PropTypes.number.isRequired
}

const ControlButtons = (props) => {

}

ControlButtons.proptypes = {
    actived: PropTypes.bool,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onSplit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
}


const SplitTimes = (props) => {
    
} 

SplitTimes.propTypes = {
    splits: PropTypes.arrayOf(PropTypes.number)
}