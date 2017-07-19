import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as Actions from '../actions';
import Post from './Post';
import '../styles/app.css';

class Subreddit extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {subreddit} = this.props;
    console.log(`${subreddit} subreddit clicked!`);
  }

  // ISO: Load Application Data when component mounts
  // Data is not loaded on the server side and passed in to client.
  // componentDidMount() {
  //   const {appActions, subreddit} = this.props;
  //   appActions.fetchPosts(subreddit);
  // }

  componentDidUpdate(prevProps) {
    const {appActions, subreddit} = this.props;
    if (subreddit !== prevProps.subreddit) {
      appActions.fetchPosts(subreddit);
    }
  }

  render() {
    const {posts, isFetching, subreddit, subreddits, children} = this.props;

    return (

      <div className='app'>
        {/* show an overlay scrim when fetching data */}
        {isFetching && (
          <div className='app-scrim' />
        )}

        <div className='header'>
          <h1 onClick={this.handleClick}>{subreddit}</h1>

          {/* navigation menu */}
          <nav>
            <ul>
              {subreddits.map((sub, ndx) => (
                <li key={ndx}><Link to={'/r/' + sub}>{sub}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='posts'>
          {posts.map((post, ndx) => (
            <Post
              key={ndx}
              post={post} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, {params}) => ({
  isFetching: state.app.isFetching,
  posts: state.app.posts,
  subreddits: state.app.subreddits,
  subreddit: params.subreddit || 'all'
});

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(Actions, dispatch)
  };
}

Subreddit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Subreddit);

export default Subreddit;