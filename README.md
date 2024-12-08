# leonardo-set-challenge
Software Engineer in Test Challenge Leonardo.ai

Programming Language - TypeScript
TestRunner - CucumberJs
WebInteractions - Playwright
Reporting - cucumber-html-reporter

# Local Setup

Nodejs stable version should be installed as a prerequisite.

1) Clone the repo to local

2) Run `npm ci` to install dependancies

3) Run `npm run test` to run test


# Time Issue - 2 hour limit

Time has been spend mostly on figuring out `When I click “Start to Create”

Main container with START TO CREATE button has been placed multiple times in the DOM and both are hidden

This could be a frontend issue , where this layout is repeated and hidden, need to check with frontend devs.

I am able to implement one block of Given When Then only because of above issue.


# Assumptions and Implementation

1) Since user sees START TO CREATE , i have updated step defintion to match the text - From “Start to Create” to "START TO CREATE" as user sees "START TO CREATE"

2) We have to click the second anchor link in the page with current implementation of frontend, used xpath axes to point to second button in the page whose parent main class contains xl:hidden

3) Since element is hidden , i used dispatch click event to click the button


# Framework Enhancements

1) .env could be configured to read environment variables and sensitive data, and implement same tests across multiple environments

2) ts config path mapping could be configured - https://playwright.dev/docs/test-typescript#tsconfig-path-mapping

3) Playwright Test Runner could be leveraged instead of cucumber for better debugging and out of box features

4) Snapshot comparison feature could be used to compare images

5) Prettier and Eslint checks could be configured to check code formatting and linting

6) Splitting Locators and StepDefintions could be done for readability and maintenance

7) Test Retries needs to be configured
