import React from 'react';

export default class StateAndPropsComponent extends React.Component {

    counter;
    timer;
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    // react life cycle hook to know if component initialised
    componentDidMount() {
        this.toggleCounter(true);
    }

    toggleCounter = (start) => {
        if (start) {
            setTimeout(() => {
                this.updateCounter();
            }, 1000)
        } else {
            clearInterval(this.timer);
        }

    }

    updateCounter = () => {
        this.timer = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            }, () => {
                if (this.state.counter === 20) {
                    this.toggleCounter(false);
                }
            })
        }, 750);
    }

    render() {
        return (
            <React.Fragment>
                <h2>State and Prop</h2>
                <p>
                    <span>Timer running at 750ms, Counter : {this.state.counter}</span>
                </p>
            </React.Fragment>
        )
    }
}