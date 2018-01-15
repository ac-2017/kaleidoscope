import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="calendar lt
            lt-xs-x-0
            lt-xs-y-3
            lt-xs-w-1
            lt-xs-h-1

            lt-sm-x-0
            lt-sm-y-1
            lt-sm-w-1
            lt-sm-h-2

            lt-md-x-1
            lt-md-y-0
            lt-md-w-1
            lt-md-h-2

            lt-lg-x-1
            lt-lg-y-0
            lt-lg-w-1
            lt-lg-h-2"><div className="lt-body note" style={{backgroundColor: this.props.color}}><h3>Calendar</h3><hr/>
            <ul className="events">
              {this.props.events.map((event,idx) => {
                return (<EventName event={event} key={idx}/>)
              })}
            </ul>
            </div></div>
    )
  }

}

const EventName = (props) => {
  return (<li className="event"><span className="eventStart">{props.event.start.dateTime.toString().split('T')[1].split('-')[0]}</span><span className="eventName">{props.event.summary}</span><hr/></li>)
}

export default Calendar