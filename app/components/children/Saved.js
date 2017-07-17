var React = require('react');
var helpers = require('../utils/helpers');

var Saved = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();

    var id = this.props.saved[event.target.id]._id;

    helpers.deleteArticle(id).then(function () {
      console.log('Article Deleted');
      window.location.reload();
    });
  },

  render: function () {
    return (
      <div className="card" id="savedCard">
        <h3 className="card-header">Saved Articles</h3>
        <div className="card-block">
          <h4 className="card-title">Saved Articles</h4>
          {this.props.saved.map(function (search, i) {
            return (
              <form id={i} key={i} onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-lg-10">
                    <p><a href={search.url} target="_blank">{search.title}</a></p>
                  </div>
                  <div className="col-lg-2">
                    <button type="submit" className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </form>
            );
          }.bind(this))}
        </div>
      </div>
    );
  }
});

module.exports = Saved;
