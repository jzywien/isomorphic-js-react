import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Post from './Post';


class Subreddit extends React.Component {

  static needs = [
    Actions.fetchPosts
  ]

  // ISO: Load Application Data when component mounts
  // Data is not loaded on the server side and passed in to client.
  // componentDidMount() {
  //   const {appActions, subreddit} = this.props;
  //   appActions.fetchPosts({subreddit});
  // }

  componentDidUpdate(prevProps) {
    const {appActions, subreddit} = this.props;
    if (subreddit !== prevProps.subreddit) {
      appActions.fetchPosts({subreddit});
    }
  }

  render() {
    const {posts} = this.props;
    return (
      <div className='posts'>
        {posts && posts.map((post, ndx) => (
          <Post
            key={ndx}
            post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, {params}) => ({
  posts: state.app.posts,
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