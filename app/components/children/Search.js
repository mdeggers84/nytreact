var React = require('react');
var Link = require('react-router').Link;

var Query = require('./grandchildren/Query');
var Results = require('./grandchildren/Results');

var Search = React.createClass({
  render: function () {
    return (
      <div className="col-lg-12">
        <Query setQuery={this.props.setQuery} />
        <hr />
        <Results articles={this.props.articles} />
      </div>
    );
  }
});

module.exports = Search;
