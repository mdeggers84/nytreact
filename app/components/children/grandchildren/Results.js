var React = require('react');

var Results = React.createClass({
  render: function () {
    return (
      <div className="card" id="resultsCard">
        <h3 className="card-header">Results</h3>
        <div className="card-block">
          <h4 className="card-title">Results</h4>
          {this.props.articles.map(function (search, i) {
            return (
              <div key={i}>
                <p><a href={search.web_url} target="_blank">{search.headline.main}</a></p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = Results;
