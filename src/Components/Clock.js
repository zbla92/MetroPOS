import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();

        let d = new Date();
        this.state = {
            intervalID: 0,
            h: d.getHours(),
            m: d.getMinutes(),
            s: d.getSeconds()
        };
        this.countingSeconds = this.countingSeconds.bind(this);
    }

    countingSeconds() {
        let d = new Date();
        this.setState({
            h: d.getHours(),
            m: d.getMinutes(),
            s: d.getSeconds()
        });
        //console.log(this.state.s);
    }

    renderTime(e) {
        return e > 9 ? e : `0` + e;
    }

    componentWillMount() {
        this.setState({ intervalID: setInterval(this.countingSeconds, 1000) });
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    render() {
        return (
            <div>
                {this.renderTime(this.state.h)}:{this.renderTime(this.state.m)}
            </div>
        );
    }
}

export default Clock;
