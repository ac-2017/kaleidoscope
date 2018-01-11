import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Time from './components/Time.jsx'
import Weather from './components/Weather.jsx'
import Calendar from './components/Calendar.jsx'
import Mail from './components/Mail.jsx'
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className="app">
        <div className="title"><span>Dashboard</span></div>
        <div className="dashboard">
        <div className="lt-container lt-xs-h-7 lt-sm-h-5 lt-md-h-3 lt-lg-h-3">
          <Time/>
          <Weather/>
          <Calendar/>
          <Mail/>
        </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));