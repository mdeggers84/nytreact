var React = require('react');
var Link = require('react-router').Link;

// children
var Search = require('./children/Search');
var Saved = require('./children/Saved');

// helpers
var helpers = require('./utils/helpers');

// main component
var Main = React.createClass({
  // initial state
  getInitialState: function () {
    return {
      query: {
        term: '',
        startDate: '',
        endDate: ''
      },
      articles: []
    };
  },

  // when page renders
  componentDidMount: function () {

  },

  // on component change
  componentDidUpdate: function () {
    helpers.runQuery(this.state.query).then(function (data) {
      console.log(data);
      this.setState({ articles: data });
    }.bind(this));
  },

  setQuery: function (query) {
    this.setState({ query: query });
  },

  render: function () {
    return (
      <div className="container-fluid">

        <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></Link>
              <Link to="/saved" className="nav-item nav-link" href="#">Saved Articles</Link>
            </div>
          </div>
        </nav>

        <div className="jumbotron text-center">
          <h1 className="display-1">NYT React</h1>
        </div>

        <div className="row">
          {React.cloneElement(this.props.children, { setQuery: this.setQuery, articles: this.state.articles })}
        </div>

      </div>
    );
  }
});

module.exports = Main;
