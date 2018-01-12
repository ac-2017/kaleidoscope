import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props)
  }

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
            lt-lg-h-1"><div className="lt-body note"><h3>Settings</h3><hr/><br/><br/><button onClick={() => {console.log('change')}} className="settings">Change Theme</button></div></div>
    )
  }

}

export default Settings