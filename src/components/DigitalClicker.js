import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0
        };
    }

    clickHandler = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
        console.log(this.state.timesClicked);
    }

    render () {
        return (
            <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;