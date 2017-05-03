(function() {
  // this function is strict...
  'use strict';

  const fetch = require('node-fetch');

  function showGitHubber(handle) {
    const url = `https://api.github.com/users/${handle}`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(user => {
        console.log(user.name);
        console.log(user.location);
      });
  }

  showGitHubber('pranaykumar');

}());
