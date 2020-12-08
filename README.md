# EvaluateNewsNLP
This is a project developed by Rafah for the Udacity Front-End Development Nano-Degree course.

This project uses MeaningCloud API to detect the NLP of the blog entered as url.

--------------
The first thing you have to do to run this code is to install Node.js.
You can do so by clicking here: https://nodejs.org/en/download/

Then you have to install the following packages
1) express
2) body-parser
3) cors
4) webpack
5) webpack-cli
6) dotenv
7) meaning-cloud
8) node-fetch
9) workbox-webpack-plugin
10) @babel/core @babel/preset-env babel-loader
11) style-loader node-sass css-loader sass-loader
11) clean-webpack-plugin
12) html-webpack-plugin
13) mini-css-extract-plugin
14) optimize-css-assets-webpack-plugin
15) terser-webpack-plugin
16) jest

## Getting started
`cd` into your folder and run:
`npm install`
and then install the appropiate plugins such as:
`npm i -D @babel/core @babel/preset-env babel-loader`<br />
`npm i -D style-loader node-sass css-loader sass-loader`<br />
`npm i -D clean-webpack-plugin`<br />
`npm i -D html-webpack-plugin`<br />
`npm i -D mini-css-extract-plugin`<br />
`npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin`<br />
Then go to https://www.meaningcloud.com/ and sign up for an API to use, create a .env file on the root file and type "API_KEY="
Then for testing, install Jest
`npm install --save-dev jest`<br />
