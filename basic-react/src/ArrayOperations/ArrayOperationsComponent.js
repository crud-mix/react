import React from 'react';

export default class ArrayoperationsComponent extends React.Component {
    nameList = [
        'Arun Mohan',
        'Dinesh Kumar',
        'Jewel Jacob',
        'Roy M J'
    ]

    render() {
        return (
            <div>
                <h3>Array Operation</h3>
                <ol>
                    {this.nameList.map((name, index) => <li key={index}>{name}</li>)}
                </ol>
            </div>
        )
    }
}