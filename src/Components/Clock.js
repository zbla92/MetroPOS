import React from 'react';

class Clock extends React.Component{
    constructor(){
        super()
        
        let d = new Date();
        this.state = {
            h: d.getHours(),
            m: d.getMinutes(),
            s: d.getSeconds()
        }
    this.countingSeconds = this.countingSeconds.bind(this)
    }

    countingSeconds(){
          let d = new Date()
          this.setState({
            h: d.getHours(),
            m: d.getMinutes(),
            s: d.getSeconds()
          })  
    }

    renderTime(e){
        return e > 9 ? e : `0` + e; 
    }

    componentWillMount(){
        setInterval(this.countingSeconds, 1000)
    }

    render(){
        return(
            <div>{this.renderTime(this.state.h)}:{this.renderTime(this.state.m)}:{this.renderTime(this.state.s)}</div>
        );        
        }
}

export default Clock;