(function() {
  // this function is strict...
  'use strict';

  const fetch = require('node-fetch');

  class GitHubAPIClient {
    async showGitHubber(handle) {
      const url = `https://api.github.com/users/${handle}`;
      const response = await fetch(url);
      return await response.json();
    }
  }


  (async() => {
    const client = new GitHubAPIClient();
    const user = await client.showGitHubber('pranaykumar');
    console.log(`user name --> ${user.name}`);
    console.log(`user location --> ${user.location}`);
  })();

}());
