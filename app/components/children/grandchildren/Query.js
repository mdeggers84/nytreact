var React = require('react');

var Query = React.createClass({
  getInitialState: function () {
    return {
      query: {
        term: '',
        startDate: '',
        endDate: ''
      }
    };
  },

  handleChange: function (event) {
    var name = event.target.name;
    var value = event.target.value;

    this.state.query[name] = value;

    this.forceUpdate();
  },

  handleSubmit: function (event) {
    event.preventDefault();

    this.props.setQuery(this.state.query);

    this.setState({
      query: {
        term: '',
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
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="start-year">Start Year (optional)</label>
              <input type="date" className="form-control" name="startYear" defaultValue={this.state.query.startDate}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="end-year">End Year (optional)</label>
              <input type="date" className="form-control" name="endYear"
                defaultValue={this.state.query.endDate}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Query;
