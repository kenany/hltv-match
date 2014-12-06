var hltvMatch = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(hltvMatch));
});

test('parses match page', function(t) {
  t.plan(2);

  var url = 'http://www.hltv.org/?pageid=188&matchid=18745&eventid=0&gameid=2';

  hltvMatch(url, function(error, res) {
    t.error(error);
    t.deepEqual(res, {
      map: 'mirage',
      event: 'ESEA Invite Season 17 Global Finals',
      homeScore: 16,
      awayScore: 12,
      home: 'mousesports',
      away: 'Cloud9'
    });
  });
});