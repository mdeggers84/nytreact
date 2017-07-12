var React = require('react');

var Results = React.createClass({
  render: function () {
    return (
      <div className="card" id="resultsCard">
        <h3 className="card-header">Results</h3>
        <div className="card-block">
          <h4 className="card-title">Results</h4>
          <p>Results go here.</p>
        </div>
      </div>
    );
  }
});

module.exports = Results;
