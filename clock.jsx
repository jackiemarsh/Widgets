import React from 'react';

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.tick = this.tick.bind(this);
    }

    
    tick() {
        this.setState({time: new Date()})
    }

    render() {
        return(
            <div>
                <h1>Clock Time</h1>
            </div>
        )
    }
}
export default Clock;