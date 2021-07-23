var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getRepositories(user) {
  const url = `https://api.github.com/users/${user}/repos`;
  const repos = [];
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.setRequestHeader(
    "Accept",
    "application/vnd.github.mercy-preview+json"
  );
  request.send();
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    for (let i = 0; i < response.length; i++) {
      for (let j = 0; j < response[i].topics.length; j++) {
        if (response[i].topics[j].toLowerCase() === "portfolio-project") {
          let repo = {
            name: response[i].name,
            description: response[i].description,
            topics: response[i].topics,
            repo_url: response[i].html_url,
            deploy_url: response[i].homepage,
          };
          repos.push(repo);
        }
      }
    }
    return repos;
  } else {
    console.log("Error " + request.statusText);
  }
}

module.exports = getRepositories;
