import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import '../styles/app.css';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Header Clicked!');
  }

  render() {
    const {isFetching, subreddit, subreddits, children} = this.props;
    return (
      <div className='app'>
        <h1 onClick={this.handleClick}>{subreddit}</h1>

        {/* show an overlay scrim when fetching data */}
        {isFetching && (
          <div className='app-scrim' />
        )}

        {/* navigation menu */}
        <nav>
          <ul>
            {subreddits.map((sub, ndx) => (
              <li key={ndx}><Link to={'/r/' + sub}>{sub}</Link></li>
            ))}
          </ul>
        </nav>
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, {params}) => ({
  isFetching: state.app.isFetching,
  subreddits: state.app.subreddits,
  subreddit: params.subreddit || 'all'
});

AppContainer = connect(
  mapStateToProps,
  null
)(AppContainer);

export default AppContainer;