# **portfolio-project**

## Those days of manually updating portfolio website after every new project made are gone⚡

### **Yesss** . . . you read that right. 😉

## _**portfolio-project**_ is a _**npm**_ package to automatically update your projects section in your portfolio website. It will fetch the selected repositories directly from your GitHub account.

<hr>

### How to use it❓

### Add **_"portfolio-project_"** as a topic in the respository which you want to add in your portfolio. For example :-

<p align="center">
  <img src="readmeIMG/npmRepo.png" title="portfolio-project">
</p>

### Now you are good to go. 🚀

In your project folder, run this in terminal:

```
> npm install portfolio-project
```

Then in the file you want to get the projects :

```javascript
const getRepositories = require("portfolio-project");

const repos = getRepositories("<Your-GitHub-Username>");
```

### _getRepositaries()_ will return a JSON object. For example :-

```JSON
[
    {
    name: "Krishi-Vikas",
    description:
      "Krishi Vikas is a platform where you can directly sell and buy any farming related product without the intervention of any third party.",
    topics: ["python", "bootstrap", "django", "portfolio-project"],
    repo_url: "https://github.com/gauravgulati15/KrishiVikas",
    deploy_url: "",
  },
  {
    name: "Search-Github-Users",
    description:
      "A React application to search GitHub users. It has Auth0 authentication and data is fetched using GitHub APIs. Fusion Charts is used to display data in graphs!",
    topics: ["javascript", "api", "reactjs", "portfolio-project"],
    repo_url: "https://github.com/gauravgulati15/Search-Github-Users",
    deploy_url: "https://search-github-users-react-gauravgulati15.netlify.app",
  },
  {
    name: "Cocktails-React",
    description: "It will fetch list of drinks from CocktailsDB",
    topics: ["api", "reactjs", "portfolio-project"],
    repo_url: "https://github.com/gauravgulati15/P10-CocktailsReact",
    deploy_url: "",
  },
]
```

- ### Note : If any repository does not have a deployed url set, then _deploy_url_ will return empty string and similar for other fields.

<br>

### Now you can use this data in your project!

### An example about how to use it in **React**.

<br>

In **_ProjectList.js_** file.

```javascript
import React from "react";
import Project from "./Project";
const getRepositories = require("portfolio-project");

const ProjectList = () => {
  const projects = getRepositories("gauravgulati15");

  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-center">
        {projects.map((item) => {
          return <Project key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
```

<br>

In **_Project.js_** file.

```javascript
import React from "react";
const Project = ({ name, description, topics, repo_url, deploy_url }) => {
  return (
      // You can display as you like!
  );
};

export default Project;
```

For example :-

<p align="center">
  <img src="readmeIMG/npmProject.PNG" title="portfolio-project">
</p>

## Try it in your Portfolios!

<br>

## **_If you like it give it a 🌟 and share it with your friends!💻_**
