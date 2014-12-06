var cheerio = require('cheerio');
var concat = require('concat-stream');
var hyperquest = require('hyperquest');

function parseMatchPage(url, callback) {
  var stream = hyperquest(url);

  stream.on('error', callback);

  stream.pipe(concat(function(data) {
    var ret = {};

    var $ = cheerio.load(data);

    $('div.covSmallHeadline').each(function(i, e) {
      switch (i) {
        case 3:
          ret.map = $(this).text();
          break;
        case 5:
          ret.event = $('span', this).attr('title');
          break;
        case 9:
          var score = $(this).text();
          score = score.substring(0, score.indexOf(' '));

          var divider = score.indexOf(':');

          ret.homeScore = parseInt(score.substring(0, divider), 10);
          ret.awayScore = parseInt(score.substring(divider + 1), 10);
          break;
        case 11:
          ret.home = $(this).text().trim();
          break;
        case 13:
          ret.away = $(this).text().trim();
          break;
      }
    });

    callback(null, ret);
  }));
}

module.exports = parseMatchPage;