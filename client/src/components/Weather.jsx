import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="weather lt
            lt-xs-x-0
            lt-xs-y-1
            lt-xs-w-1
            lt-xs-h-1

            lt-sm-x-1
            lt-sm-y-0
            lt-sm-w-1
            lt-sm-h-1

            lt-md-x-0
            lt-md-y-1
            lt-md-w-1
            lt-md-h-1
            
            lt-lg-x-0
            lt-lg-y-1
            lt-lg-w-1
            lt-lg-h-1"><div className="lt-body note" style={{backgroundColor: this.props.color}}><h3>Weather</h3><hr/><br/>
            <span className="forecast description">{this.props.forecast.weather}</span>
            <span className="forecast temperature">{this.props.forecast.temp_f + '°F'}</span>
            <br/><br/>
            <span className="forecast humidity">{this.props.forecast.relative_humidity + ' humidity'}</span>
            <span className="forecast windspeed">{'💨' + this.props.forecast.wind_mph + 'mph'}</span>
            </div></div>
      )
  }
}

export default Weather