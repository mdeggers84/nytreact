var React = require('react');

// children

// helpers

// main component
var Main = React.createClass({
  // initial state
  getInitialState: function () {
    return {};
  },

  // when page renders
  componentDidMount: function () {

  },

  // on component change
  componentDidUpdate: function () {

  },

  render: function () {
    return (
      <div className="container-fluid">
        <div className="jumbotron text-center">
          <h1 className="display-1">NYT React</h1>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;
