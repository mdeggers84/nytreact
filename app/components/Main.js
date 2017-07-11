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

        <div className="card" id="searchCard">
          <h3 className="card-header">Search</h3>
          <div className="card-block">
            <form>
              <div className="form-group">
                <label htmlFor="search-box">Search Term</label>
                <input type="text" className="form-control" id="search-box" placeholder="Enter Search Here" required />
              </div>
              <div className="form-group">
                <label htmlFor="result-count">Number of results to retrieve.</label>
                <select className="form-control" id="result-count">
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Year (optional)</label>
                <input type="date" className="form-control" id="start-year" />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Year (optional)</label>
                <input type="date" className="form-control" id="end-year" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="card" id="resultsCard">
          <h3 className="card-header">Results</h3>
          <div className="card-block">
            <h4 className="card-title">Results</h4>
            <p>Results go here.</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
