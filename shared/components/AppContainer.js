import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class AppContainer extends React.Component {

  render() {
    const {children} = this.props;

    return (
      <div className='app-container'>
        <a>Test1</a>
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

AppContainer = connect(
  mapStateToProps,
  null
)(AppContainer);

export default AppContainer;