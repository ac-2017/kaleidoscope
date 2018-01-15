import React from 'react';
import GoogleLogin from 'react-google-login'

class Settings extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   gapi.signin2.render('g-signin2', {
  //   'scope': 'https://www.googleapis.com/auth/plus.login',
  //   'width': 200,
  //   'height': 50,
  //   'longtitle': true,
  //   'theme': 'light',
  //   'onsuccess': function(e) {this.props.handleSignin(e)}
  // })
  // }
  render() {
    return (
      <div className="settings lt
            lt-xs-x-0
            lt-xs-y-6
            lt-xs-w-1
            lt-xs-h-1

            lt-sm-x-1
            lt-sm-y-1
            lt-sm-w-1
            lt-sm-h-1

            lt-md-x-0
            lt-md-y-2
            lt-md-w-1
            lt-md-h-1

            lt-lg-x-0
            lt-lg-y-2
            lt-lg-w-1
            lt-lg-h-1"><div className="lt-body note" style={{backgroundColor: this.props.color}}><h3>Settings</h3><hr/><br/><button onClick={() => {this.props.changetheme()}} className="settings">Change Theme</button><br/><br/>
            <GoogleLogin clientId="887543554872-80l232don58toekabesa2sv8f8tmcd1t.apps.googleusercontent.com" style={{backgroundColor: '#2ecc71'}} buttonText="Login with Google" scope="https://www.googleapis.com/auth/calendar.readonly"onSuccess={(e) => {this.props.handleSignin(e)}}/>
            </div></div>
    )
  }

}

export default Settings