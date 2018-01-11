import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props)
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
            lt-lg-h-1"><div className="lt-body note"><h3>Time</h3><hr/><span className="timer">12 | 00</span></div></div>
    )
  }

}

export default Time