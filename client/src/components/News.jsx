import React from 'react';

class News extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.articles)
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
            lt-sm-h-3

            lt-md-x-2
            lt-md-y-0
            lt-md-w-1
            lt-md-h-3

            lt-lg-x-2
            lt-lg-y-0
            lt-lg-w-2
            lt-lg-h-3"><div className="lt-body note"><h3>News</h3><hr/>
            <ul className="headlines">
              {this.props.articles.map((article,idx) => {
                return (<NewsArticle article={article} key={idx}/>)
              })}
            </ul>
            </div>
            </div>
    )
  }
}

const NewsArticle = (props) => {
  return (<li className="article"><a className="articleTitle" href={props.article.url} target="_blank">{props.article.title}</a><span className="articleTime">{(new Date(props.article.publishedAt)).toString().split(' GMT')[0].split(' 2018 ').join(' ')}</span><hr/></li>)
}

export default News