(function() {
  // this function is strict...
  'use strict';

  const fetch = require('node-fetch');

  const showGitHubber = async function (handle) {
    const url = `https://api.github.com/users/${handle}`;
    console.log(url);

    const response = await fetch(url);
    const user = await response.json();

    return user;
  }

  showGitHubber('pranaykumar').then(user => {
    console.log(user.name);
    console.log(user.location);
  });

}());
