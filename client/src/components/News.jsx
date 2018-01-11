import React from 'react';

class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="news lt
            lt-xs-x-0
            lt-xs-y-4
            lt-xs-w-1
            lt-xs-h-2

            lt-sm-x-0
            lt-sm-y-3
            lt-sm-w-2
            lt-sm-h-2

            lt-md-x-2
            lt-md-y-0
            lt-md-w-1
            lt-md-h-3

            lt-lg-x-2
            lt-lg-y-0
            lt-lg-w-2
            lt-lg-h-3"><div className="lt-body note"><h3>News</h3><hr/><ul className="headlines"><li>news 1</li><li>news 2</li></ul></div></div>
    )
  }

}

export default News