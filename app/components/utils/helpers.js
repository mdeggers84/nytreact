var axios = require('axios');

var nytAPI = '40008c6c3f074badbf6dfed4466c83db';

var helper = {

  runQuery: function (search) {
    var startDate = search.startDate || '19841010';
    var endDate = search.endDate || new Date().toISOString().substr(0, 10).replace(/-/g, '');

    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    queryURL += '?' + $.param({
      'api-key': nytAPI,
      q: search.term,
      begin_date: startDate,
      end_date: endDate
    });

    return axios.get(queryURL).then(function (response) {
      var data = [];

      if (data) {
        for (let i = 0; i < 5; i++) {
          data.push(response.data.response.docs[i]);
        }
        return data;
      }

      return '';
    });
  },

  getArticle: function () {
    return axios.get('/api/saved');
  },

  postArticle: function (article) {
    return axios.post('/api/saved', { article });
  },

  deleteArticle: function (id) {
    return axios.delete('/api/saved/' + id);
  }
};

module.exports = helper;
