import React from 'react';

export default class FunctionComponent extends React.Component {
    data = {
        name: 'John Doe',
        age: -99
    }

    render() {
        return <SimpleComponent data={this.data} />
    }

}

function SimpleComponent(props) {
    return (
        <div>
            <h3>Function Component</h3>
            <p>The simplest way to define a component is to write a JavaScript function</p>
            <p>
                <span>{props.data.name}</span> is <span>{props.data.age} year(s) old</span>
            </p>
        </div>
    )
}