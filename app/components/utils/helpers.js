var axios = require('axios');

var nytAPI = '40008c6c3f074badbf6dfed4466c83db';

var helper = {

  runQuery: function (search) {
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    queryURL += '?' + $.param({
      q: search,
      'api-key': nytAPI
    });
    return axios.get(queryURL).then(function (response) {
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }

      return '';
    });
  },

  getArticle: function () {
    return axios.get('/api/saved');
  },

  postArticle: function (article) {
    return axios.post('/api/saved', { article: article });
  },

  deleteArticle: function (article) {
    return axios.delete('/api/saved', { article: article });
  }
};

module.exports = helper;
