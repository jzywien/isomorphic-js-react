import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Post from './Post';


class Subreddit extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  static needs = [
    Actions.fetchPosts
  ]

  componentDidUpdate(prevProps) {
    const {appActions, subreddit} = this.props;
    if (subreddit !== prevProps.subreddit) {
      appActions.fetchPosts({subreddit});
    }
  }

  handleClick() {
    console.log('test');
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