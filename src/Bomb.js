import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props) {
      super(props)
      this.state = {
        secondsLeft: props.initialCount
      }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        this.setState({
          secondsLeft: this.state.secondsLeft - 1,
        });
      }, 1000);
  }

  componentWillUnmount() {
    if (this.state.secondsLeft === 0) {
        clearInterval(this.interval);
    }
  }

  render() {
    if (this.state.secondsLeft > 0) {
    return (
        <p>{`${this.state.secondsLeft} seconds left before I go boom!`}</p>
    )
    } 
    else {
        return <p>Boom!</p>
    }
  }
}

export default Bomb
