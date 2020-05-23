import React from 'react';

export default class HandleEventComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    modifyCount = (add) => {
        this.setState({
            count: add ? this.state.count + 1 : this.state.count - 1
        })
    }

    resetCount = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <h2>Handle Events</h2>
                <button onClick={this.modifyCount.bind(this, false)}>Decrement</button>
                <h3>{this.state.count}</h3>
                <button onClick={this.modifyCount.bind(this, true)}>Increment</button>
                <br/>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}