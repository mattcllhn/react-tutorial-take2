import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

export default class ReduxIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            message: "Hello this is the redux tutorial",
        };
    }
    render() {
        return (
            <div>
                <header>
                    <h1>{this.state.message}</h1>
                </header>
                <section>
                    <ul>
                        <li><Link to="/game">Game</Link></li>
                        <li><Link to="/home">Home</Link></li>

                    </ul>
                </section>
            </div>
        )

    }
}