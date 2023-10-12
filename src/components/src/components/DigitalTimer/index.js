// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {time: 25, isTimerRunning: false, timer: 0}

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  onIncrement = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({time: prevState.time - 1}))
  }

  startPause = () => {
    const {isTimerRunning} = this.state
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
    if (isTimerRunning) {
      clearInterval(this.timerID)
    }
  }

  render() {
    const {time, isTimerRunning, timer} = this.state

    return (
      <div className="App-container">
        <h1>Digital Timer</h1>
        <div className="main-container">
          <div className="timer-container">
            <div className="display-time">
              <p className="timer-text">{timer}</p>
            </div>
          </div>
          <div className="buttons-container">
            <div className="start-pause-button-container">
              <div>
                <button
                  type="button"
                  className="button button-text"
                  onClick={this.startPause}
                >
                  <div className="img-container">
                    <img
                      className="button-img"
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play"
                    />
                  </div>
                  <div type="button" className="">
                    {isTimerRunning ? 'pause' : 'start'}
                  </div>
                </button>
              </div>
              <div>
                <button type="button" className="button">
                  <div className="img-container">
                    <img
                      className="button-img"
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      alt="reset"
                    />
                  </div>
                  <div className="button-text">Reset</div>
                </button>
              </div>
            </div>
            <div>
              <p>Set Timer limit</p>
              <div className="set-time-limit-container">
                <div className="">
                  <button
                    type="button"
                    className="plus-minus-btn"
                    onClick={this.onDecrement}
                  >
                    -
                  </button>
                </div>
                <div className="user-enter-time">
                  <p className="timer-text">{time}</p>
                </div>
                <div>
                  <button
                    className="plus-minus-btn"
                    type="button"
                    onClick={this.onIncrement}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
