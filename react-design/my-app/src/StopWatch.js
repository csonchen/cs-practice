import React, { Fragment } from 'react'
import MajorClock from './MajorClock';
import ControlButtons from './ControlButtons';
import SplitTimes from './SplitTimes';

const colorStyle = {
    color: 'green'
}

export default class StopWatch extends React.Component {
    state = {
        isStarted: false,
        startTime: null,
        currentTime: null,
        splits: [],
    }

    onSplit = () => {
        console.log(this.state.splits)
        this.setState({ 
            splits: [ ...this.state.splits, this.state.currentTime - this.state.startTime]
        })
    }

    onStart = () => {
        this.setState({
            isStarted: true,
            startTime: new Date(),
            currentTime: new Date()
        })

        this.intervalValue = setInterval(() => {
            this.setState({ currentTime: new Date() })
        }, 1000 / 60)
    }

    onPause = () => {
        clearInterval(this.intervalValue)
        this.setState({
            isStarted: false
        })
    }

    onReset = () => {
        this.setState({
            splits: [],
            startTime: null,
            currentTime: null
        })
    }

    render() {
        const {currentTime, isStarted, splits, startTime} = this.state
        console.log(splits)
        return (
            <div>
                <h1 style={colorStyle}>秒表</h1>
                <MajorClock milliseconds={currentTime - startTime} actived={isStarted}></MajorClock>
                <ControlButtons 
                actived={isStarted}
                onPause={this.onPause}
                onSplit={this.onSplit}
                onStart={this.onStart}
                onReset={this.onReset}></ControlButtons>
                <SplitTimes splits={splits}></SplitTimes>
            </div>
       
        )
    }
}