# README

## What is this repository for?
### Interview test task:

Write an automated test using TypeScript and the Playwright framework.

#### Test Scenario:

1. Open [Faphouse](https://faphouse.com/)
2. Accept cookies
3. Enter "Homemade" in the search bar in the header
4. Press Enter
5. Verify that the search results page is displayed
6. Ensure there are 60 videos on the results page
7. Verify that all videos are unique (no duplicates)

#### Requirements:

1. Use Page Object Model
2. Utilize fixtures
3. Avoid timeouts in seconds

#### Bonus Points for:

1. Moving cookie acceptance logic (step 2) to global setup for reusability
2. Designing a scalable architecture for future test expansion

## Technology stack

- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/) - framework for Web Testing and Automation
- [ESLint](https://eslint.org/) - Static code analyzer
- [Prettier](https://prettier.io/) - An opinionated code formatter

## How to set up and run tests?
### To set up:
- Pull the `master` branch

### To run tests:
- Make sure you have Docker installed and started.
- Run `docker build -t fh-test .` from the root folder for building docker image.
- Run `docker run fh-test` from the root folder to run container and run tests inside it.