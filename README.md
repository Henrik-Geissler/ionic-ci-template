# ionic-ci-template

A CI/CD setup of the [Ionic Starter Template](https://ionicframework.com/docs/v3/cli/starters.html) with Linting, UNIT & E2E Testing and Continuous Delivery. See the [App in Action](https://henrik-geissler.github.io/ionic-ci-template)!

[![GitHub package.json version](https://img.shields.io/github/package-json/v/Henrik-Geissler/ionic-ci-template)](https://github.com/Henrik-Geissler/ionic-ci-template/releases)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Henrik-Geissler/ionic-ci-template/CI)](https://github.com/Henrik-Geissler/ionic-ci-template/deployments)
[![David](https://img.shields.io/david/Henrik-Geissler/ionic-ci-template)](https://david-dm.org/Henrik-Geissler/ionic-ci-template)
[![David](https://img.shields.io/david/dev/Henrik-Geissler/ionic-ci-template)](https://david-dm.org/Henrik-Geissler/ionic-ci-template?type=dev)
[![Codecov](https://img.shields.io/codecov/c/github/Henrik-Geissler/ionic-ci-template)](https://codecov.io/gh/Henrik-Geissler/ionic-ci-template)
[![GitHub repo size](https://img.shields.io/github/repo-size/Henrik-Geissler/ionic-ci-template)]()
[![GitHub](https://img.shields.io/github/license/Henrik-Geissler/ionic-ci-template)](https://github.com/Henrik-Geissler/ionic-ci-template/blob/master/LICENSE)
[![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/ionic-ci-template/react)](https://reactjs.org/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/ionic-ci-template/dev/ionic)](https://ionicframework.com/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/ionic-ci-template/dev/cucumber)](https://cucumber.io/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/ionic-ci-template/dev/puppeteer)](https://pptr.dev/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/ionic-ci-template/dev/pixelmatch)](https://github.com/mapbox/pixelmatch)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/ionic-ci-template/dev/prettier)](https://prettier.io/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/ionic-ci-template/dev/standard-version)](https://www.conventionalcommits.org/)

You can use this repository as a starting point for your Cross Platform Mobile App Behaviour Driven Development. Every change in your codebase will be auto linted, tested, released and deployed.

## Installation

```bash
git clone https://github.com/Henrik-Geissler/ionic-ci-template.git
cd ionic-ci-template
yarn install
```

## Usage

### - local

##### 1. `yarn lint`

Runs linter: [ESLint](https://eslint.org/), [GherkinLint](https://github.com/vsiakka/gherkin-lint/) and [Prettier](https://www.prettier.io/)
with well chosen rulesets.

##### 2. `yarn start`

Creates a development build and serves it on localhost.

##### 3. `yarn test`

Runs tests: UNIT Tests with [Jest](https://jestjs.io/) and E2E Tests with [Cucumber](https://cucumber.io/) & [Puppeteer](https://pptr.dev/). Comes with [Code Coverage Reports](https://codecov.io/gh/Henrik-Geissler/ionic-ci-template) and a [Pattern Library](https://github.com/Henrik-Geissler/ionic-ci-template/tree/master/pattern/feature) to copy-paste from.

##### 4. `yarn prerelease`

Creates a [CHANGELOG.md](https://github.com/Henrik-Geissler/ionic-ci-template/blob/master/CHANGELOG.md) with [Standard Version](https://www.conventionalcommits.org/) and a `stable` branch.

##### 5. `yarn deploy`

Deploys the App to GitHub Pages. See the [App in Action](https://henrik-geissler.github.io/ionic-ci-template)!

### - remote

##### 1: `git push origin master`

Workflows run all the above automated on the remote end with [Github Actions](https://github.com/Henrik-Geissler/ionic-ci-template/actions) after every `git push`.
