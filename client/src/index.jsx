import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

import Time from './components/Time.jsx'
import Weather from './components/Weather.jsx'
import Calendar from './components/Calendar.jsx'
import Mail from './components/Mail.jsx'
import News from './components/News.jsx'
import Settings from './components/Settings.jsx'
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: '',
      weather: {},
      news: [],
      events: [],
      color: 'rgba(33, 33, 33, .8)',
      font: '#ecf0f1'
    }
    this.getWeather = this.getWeather.bind(this)
    this.getNews = this.getNews.bind(this)
    this.getCalendar = this.getCalendar.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
    this.updateTheme = this.updateTheme.bind(this)
    this.googleSignin = this.googleSignin.bind(this)
  }

  componentWillMount() {
    if (localStorage.getItem('style') === undefined) {
      localStorage.setItem('style', 'windows')
    }
    this.updateTheme() 
    var today = new Date().getHours()
    if (today > 18) {
      this.setState({
        greeting: 'Good Evening'
      })
    } else if (today > 12) {
      this.setState({
        greeting: 'Good Afternoon'
      })
    } else {
      this.setState({
        greeting: 'Good Morning'
      })
    }
    this.getNews()
    this.getWeather()
    setInterval(() => {
      this.getNews();
      this.getWeather();
    },300000)
  }

  getWeather() {
    axios.get('/weather')
    .then((response) => {
      // console.log(response.data)
      this.setState({
        weather: response.data.current_observation
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  getNews() {
    axios.get('/news')
    .then((response) => {
      this.setState({
        news: response.data
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  getCalendar(token) {
    axios.get('/calendar', {params: {token: token}})
    .then((response) => {
      console.log(response.data)
      this.setState({
        events: response.data.items.reverse()
      })
    })
  }

  changeTheme() {
    if (localStorage === undefined) {
      console.alert('Your browser doesnt support local storage :(')
    } else {
      if (localStorage.getItem('style') === 'windows') {
        localStorage.setItem('style', 'apple')
      } else {
        localStorage.setItem('style', 'windows')
      }
     this.updateTheme()
    }
  }

  updateTheme() {
    if (localStorage.getItem('style') === 'windows') {
      this.setState({
        color: 'rgba(33, 33, 33, .8)',
        font: '#ecf0f1'
      })
    } else {
      this.setState({
        color: 'rgba(236, 240, 241, .6)',
        font: 'black'
      })
    }
  }

  googleSignin(user) {
    console.log(user)
    var token = user.accessToken
    // var email = user.profileObj.email
    console.log('signed', token)
    // const header = 'Authorization: Bearer ' + token
    this.getCalendar(token)
  }


  render () {
    return (
      <div className="app">
        {/*<div className="title"><span>{this.state.greeting}</span></div>*/}
        <div id="dashboard">
        <div className="lt-container lt-xs-h-6 lt-sm-h-5 lt-md-h-3 lt-lg-h-3" style={{color: '' + this.state.font}}>
          <Time color={this.state.color}/>
          <Weather forecast={this.state.weather} color={this.state.color}/>
          <Settings changetheme={this.changeTheme} color={this.state.color} handleSignin={this.googleSignin}/>
          <Calendar events={this.state.events} color={this.state.color}/> 
          <Mail color={this.state.color}/>
          <News articles={this.state.news} color={this.state.color}/>
        </div>

        </div>
      {/*<div className="title"><span>{this.state.greeting}</span></div>*/}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));