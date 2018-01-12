import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '',
      date: ''
    }
    this.tickTock = this.tickTock.bind(this)
  }

  componentWillMount() {
    this.tickTock()
    setInterval(() => {
      this.tickTock()
    },1000)
  }

  tickTock() {
    var currentDate = new Date();
    var currentDay = currentDate.toDateString()
    var dateTime = currentDate.getHours() + ':' + (JSON.stringify(currentDate.getMinutes()).length === 2 ? currentDate.getMinutes() : '0' + currentDate.getMinutes()) + ':' + (JSON.stringify(currentDate.getSeconds()).length === 2 ? currentDate.getSeconds() : '0' + currentDate.getSeconds())
    this.setState({
      time: dateTime,
      date: currentDay
    })
  }

  render() {
    return (
      <div className="time lt
            lt-xs-x-0
            lt-xs-y-0
            lt-xs-w-1
            lt-xs-h-1

            lt-sm-x-0
            lt-sm-y-0
            lt-sm-w-1
            lt-sm-h-1

            lt-md-x-0
            lt-md-y-0
            lt-md-w-1
            lt-md-h-1

            lt-lg-x-0
            lt-lg-y-0
            lt-lg-w-1
            lt-lg-h-1"><div className="lt-body note"><h3>Time</h3><hr/><br/><span className="timer">{this.state.time}</span><br/><span className="date">{this.state.date}</span></div></div>
    )
  }

}

export default Time