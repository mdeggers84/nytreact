var axios = require('axios');

var nytAPI = '40008c6c3f074badbf6dfed4466c83db';

var helper = {

  runQuery: function (search) {
    var startDate = search.startDate || '19841010';
    var endDate = search.endDate || new Date().toISOString().substr(0, 10).replace(/-/g, '');
    console.log(startDate, endDate);

    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    queryURL += '?' + $.param({
      'api-key': nytAPI,
      q: search.term,
      begin_date: startDate,
      end_date: endDate
    });
    return axios.get(queryURL).then(function (response) {
      var data = response.data.response.docs;
      console.log(data.formatted);
      if (data) {
        return data;
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
