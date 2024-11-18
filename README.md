# GitHub_testing

This repository, GitHub testing, is made for automation practice.

# Framework setup

Requirements : Visual Studio Code, Typescript, Jest and Selenium installed. <br>

WebDriver with Selenium -> [download](https://chromedriver.chromium.org/downloads) ChromeDriver with the proper Chrome version <br>
In case of a Chrome Browser update, run : `npm install selenium-webdriver@latest` to update Selenium. 

Node.js -> [here](https://nodejs.org/en/download) <br>

Framework setup: 
!run in terminal!
* Creating a package.json file for compiling : `npm init –y` <br>
* Installing dependencies listed in the package.json file : `npm install` <br>
* Installing Typescript : `npm i -D typescript` <br>
* Building the project : `npm run build` <br>
* Configuring JEST : `npm i -D jest ts-jest @types/jest` <br>
* Using ts-jest as a preprocessor : `npx ts-jest config:init`
* Setting environment to run the tests : `npm install jest-serial-runner --save-dev ` <br>

# Running the project

* Running a specific test : `npm test thenameofthetest.test.ts` <br> 
* Running all the tests : `npm test`
