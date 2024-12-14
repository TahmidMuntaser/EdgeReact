import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <h1 className="heading">
                <span className="text">Hello {this.state.date.toLocaleTimeString(this.props.locate)}</span>
            </h1>
        );
    }
}

export default Clock;