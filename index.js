var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const getRepositories = (user) => {
  const promise = new Promise((resolve, reject) => {
    const url = `https://api.github.com/users/${user}/repos`;
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader(
      "accept",
      "application/vnd.github.mercy-preview+json"
    );

    request.onload = () => {
      if (request.status === 200) {
        response = JSON.parse(request.responseText);
        const repos = [];
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

        resolve(repos);
      } else {
        reject(
          new Error(
            "Error: " +
              request.statusText +
              ", Please enter a correct username!"
          )
        );
      }
    };

    request.send();
  });
  return promise;
};

module.exports = getRepositories;
