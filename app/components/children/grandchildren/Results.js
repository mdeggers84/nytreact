var React = require('react');
var helpers = require('../../utils/helpers');

var Results = React.createClass({

  handleSubmit: function (event) {
    event.preventDefault();

    var article = {
      title: this.props.articles[event.target.id].headline.main,
      url: this.props.articles[event.target.id].web_url
    };

    helpers.postArticle(article).then(function () {
      console.log('Article Saved');
    });
  },

  render: function () {
    return (
      <div className="card" id="resultsCard">
        <h3 className="card-header">Results</h3>
        <div className="card-block">
          <h4 className="card-title">Results</h4>
          {this.props.articles.map(function (search, i) {
            return (
              <form id={i} key={i} onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-lg-10">
                    <p><a href={search.web_url} target="_blank">{search.headline.main}</a></p>
                  </div>
                  <div className="col-lg-2">
                    <button type="submit">Save</button>
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

module.exports = Results;
