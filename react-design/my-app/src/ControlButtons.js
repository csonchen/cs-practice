import React from 'react'
import PropTypes from 'prop-types'
import "./ControlButtons.css"

const ControlButtons = (props) => {
    const { actived, onStart, onPause, onSplit, onReset } = props

    if (actived) {
        return (
            <div>
                <button className="control-btn" onClick={onSplit}>计次</button>
                <button className="control-btn" onClick={onPause}>停止</button>
            </div>
        )
    } else {
        return (
            <div>
                <button className="control-btn" onClick={onStart}>开始</button>
                <button className="control-btn" onClick={onReset}>复位</button>
            </div>
        )
    }

}

ControlButtons.propTypes = {
    actived: PropTypes.bool,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onSplit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
}

export default ControlButtons