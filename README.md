# EmulatorJS Website

This is the official website for the EmulatorJS project.
Here you will find information on any prerequisites needed, installation & setup processes and advanced configuration options.

Note: This website is built upon vuepress.

# Contributing

In order to contribute, you will need the following:
* Node.js 10+
* Yarn
* Vuepress
* A code editor like Visual Studio Code

# Installation
In this example, we will be using Visual Studio Code with the [yarn](gamunu.vscode-yarn) extension.
Clone the repository and make it your working directory.
* Install the yarn plugin from the Extensions store in Visual Studio Code
* Use the "Source Control" menu to pull/clone the repository (download to your computer).

## Vuepress
Run the following commands one after the other.
The first command will take you through the initiation process where you can edit the project information and add your info as a contributing author.
```
yarn init
```
Next, install vuepress locally.
```
yarn add -D vuepress
```
Lastly, run the following to spin up and webhost the project
```
yarn dev_new
```
It can now be reached at http://localhost:8080/.

NOTE: Whenever you make any changes to the vuepres "config.js" file, close the running node program and re-reun 'yard dev_new'