import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.maju(),
            1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    
    maju() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {
        return (
            <h2>Sekarang jam: {this.state.time}</h2>
        )
    }
}

export default Clock;