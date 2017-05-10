import React from 'react';

class AppView extends React.Component {
  render() {
    return (
      <div id="app-view">
        <h1>Todos</h1>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default AppView;