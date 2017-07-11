var React = require('react');

var Query = React.createClass({
  render: function () {
    return (
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
    );
  }
});

module.exports = Query;
