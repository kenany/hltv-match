# hltv-match

Parse HLTV match page.

## Example

``` javascript
var hltvMatch = require('hltv-match');

var url = 'http://www.hltv.org/?pageid=188&matchid=18745&eventid=0&gameid=2';

hltvMatch(url, function(error, data) {
  if (error) {
    throw error;
  }

  console.log(data);
  // => {
  // =>   map: 'mirage',
  // =>   event: 'ESEA Invite Season 17 Global Finals',
  // =>   homeScore: 16,
  // =>   awayScore: 12,
  // =>   home: 'mousesports',
  // =>   away: 'Cloud9'
  // => }
});
```

## Installation

``` bash
$ npm install hltv-match
```

## API

``` javascript
var hltvMatch = require('hltv-match');
```

### `hltvMatch(url, callback)`

Parses the match at _String_ `url` and calls `callback(error, data)`, where
`error` is any _Error_ encounted and `data` is an _Object_ populated with the
parsed data.