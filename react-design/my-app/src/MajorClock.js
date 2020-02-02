import React from 'react'
import PropTypes from 'prop-types'
import padStart from 'lodash/padStart'
import css from 'styled-jsx/macro'


const MajorClock = ({ milliseconds = 0, actived = false}) => {
    const { className, styles } = css.resolve`
        h2 { color: ${!actived ? 'black' : 'red'} }
    `

    return (
        <>
            {styles}
            <h2 className={className}>{ms2Time(milliseconds)}</h2>
        </>
    )
}

const ms2Time = (originMs) => {
    let time = originMs
    const ms = originMs % 1000

    time = (originMs - ms) / 1000
    const ss = time % 60

    time = (time - ss) / 60
    const mm = time % 60

    const hh = (time - mm) / 60

    const result = padStart(hh, 2, '0') 
    + ':' + padStart(mm, 2, '0') 
    + ':' + padStart(ss, 2, '0')
    + ':' + ms
    return result
}

MajorClock.propTypes = {
    milliseconds: PropTypes.number.isRequired,
    actived: PropTypes.bool,
}

export default MajorClock