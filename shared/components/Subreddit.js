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

  componentDidMount() {
    // const {appActions} = this.props;
    // appActions.fetchPosts();
  }

  handleClick() {
    console.log('test');
  }

  render() {
    const {routeParams, posts} = this.props;
    const {subreddit} = routeParams;
    return (
      <div onClick={this.handleClick}> Subreddit - {subreddit}
        {posts && posts.map((post, ndx) => (
          <Post
            key={ndx}
            post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.app.posts,
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