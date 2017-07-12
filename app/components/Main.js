var React = require('react');
var Link = require('react-router').Link;

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

        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
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

        <div className="row">
          {this.props.children}
        </div>
        
      </div>
    );
  }
});

module.exports = Main;
