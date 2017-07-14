var React = require('react');

var Query = React.createClass({
  getInitialState: function () {
    return {
      query: {
        term: '',
        qty: 5,
        startDate: '1990-01-01',
        endDate: new Date().toISOString().substr(0, 10)
      }
    };
  },

  handleChange: function (event) {
    var name = event.target.name;
    var value = event.target.value;

    this.setState({ [name]: value });
  },

  handleSubmit: function (event) {
    event.preventDefault();

    this.props.setQuery(this.state.query);
    
    this.setState({
      query: {
        term: '',
        qty: 5,
        startDate: '',
        endDate: ''
      }
    });
  },

  render: function () {
    return (
      <div className="card" id="searchCard">
        <h3 className="card-header">Search</h3>
        <div className="card-block">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="search-box">Search Term</label>
              <input type="text" className="form-control" name="term" placeholder="Enter Search Here"
                defaultValue={this.state.query.term}
                onChange={this.handleChange}
                required />
            </div>
            <div className="form-group">
              <label htmlFor="result-count">Number of results to retrieve.</label>
              <select className="form-control" name="qty" defaultValue={this.state.query.qty}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="start-year">Start Year (optional)</label>
              <input type="date" className="form-control" name="startYear" defaultValue={this.state.query.startDate} />
            </div>
            <div className="form-group">
              <label htmlFor="end-year">End Year (optional)</label>
              <input type="date" className="form-control" name="endYear" defaultValue={this.state.query.endDate} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Query;
