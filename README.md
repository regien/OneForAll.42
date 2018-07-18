# OneForAll.42

![npm](https://img.shields.io/badge/npm-v.6.2.0-22aad0.svg)
[![RN-Version](https://img.shields.io/badge/react.js-16.4.1-01babc.svg)](https://github.com/facebook/react/releases/tag/v16.4.1)
[![GitHub Stars](https://img.shields.io/github/stars/jraleman/OneForAll.42.svg)](https://github.com/jraleman/OneForAll.42/stars)
[![GitHub Issues](https://img.shields.io/github/issues/jraleman/OneForAll.42.svg)](https://github.com/jraleman/OneForAll.42/issues)
[![Slack](https://img.shields.io/badge/slack-open-yellow.svg)](https://42siliconvalley.slack.com)

## About

...

Take a look at our pitch!

- [Via Google Slides](./)
- [Download PDF](./)

### Why?

...

### How?

...

## Setup

Clone the repository:

```
git clone https://github.com/jraleman/OneForAll.42 OneForAll.42/
cd OneForAll.42/
```

Install dependencies:

```
npm install
```

## Project Structure

The idea of having a good project structure is to have a cross platform
project, to maximize code reuse, keep the configurations out of the code,
and minimize the component state.

This is the main idea:

```
...
```

### Project Structure Walkthrough

This is just a basic walkthrough to the project structure, walking through
the directories in more detail.

```
...
```

Work in progress. :)

## Style Guide

### Code

This project follows the `semistandard`, which is just the `standard` style
guide, but including semicolons `;` at the end of a statement. This is because
love the C programming languages, and semicolons are awesome.

#### Setup

To install it, run:

```
npm run lint-install
```

#### Usage

After running `npm install`, you can run the following scripts (depending on
your platform), to check if the code follows the `semistandard` coding
style guide.

```
npm run lint
```

This will print out the errors and/or warnings that your code might have.

Also, you might want to check the following table! ;)

| Mac OS X           | Linux                    | Description                 |
| :----------------- | :----------------------- | :-------------------------- |
| `npm run lint`     | `npm run lint`           | Checks `src/` code style    |
| `npm run lint-log` | `npm run lint-log-linux` | Saves and open the log file |

#### Help

If you have any problem running the lint from the project, try installing the
following packages globally, like this:

```
npm install --save snazzy
npm install --save semistandard
```

And then just run the lint from your end.

### Colors

#### Primary

![#222222](http://via.placeholder.com/150/222222/fffffff?text=222222)
![#333333](http://via.placeholder.com/150/333333/fffffff?text=333333)
![#444444](http://via.placeholder.com/150/444444/fffffff?text=444444)
![#555555](http://via.placeholder.com/150/555555/fffffff?text=555555)
![#666666](http://via.placeholder.com/150/666666/fffffff?text=666666)

#### Secondary

![#777777](http://via.placeholder.com/150/777777/fffffff?text=777777)
![#888888](http://via.placeholder.com/150/888888/fffffff?text=888888)
![#999999](http://via.placeholder.com/150/999999/fffffff?text=999999)
![#AAAAAA](http://via.placeholder.com/150/AAAAAA/fffffff?text=aaaaaa)
![#BBBBBB](http://via.placeholder.com/150/BBBBBB/0000000?text=bbbbbb)

#### Dark / Light

![#121212](http://via.placeholder.com/150/121212/ffffff?text=121212)
![#f9f9f9](http://via.placeholder.com/150/f9f9f9/000000?text=f9f9f9)

#### Success / Error / Warning / Info

![#b8e986](http://via.placeholder.com/150/b8e986/000000?text=b8e986)
![#d9534f](http://via.placeholder.com/150/d9534f/ffffff?text=d9534f)
![#f3bd71](http://via.placeholder.com/150/f3bd71/000000?text=f3bd71)
![#92bced](http://via.placeholder.com/150/92bced/000000?text=92bced)

### Look & Feel

- [Material UI](https://material-ui.com/)

#### Font

- [Impact](https://www.wfonts.com/font/impact)
- [Roboto](https://fonts.google.com/specimen/Roboto)

#### Icons

- [Material Design Icons](https://materialdesignicons.com/)

## Contributors

- [Jose Ramón Aleman](https://github.com/jraleman)
- [Gerardo Malpartida](https://github.com/regien)

## Goals

- [x] Start
  - [x] Nuke the repo, start from scratch!
  - [x] Rename repo -> `OneForAll.42`
  - [x] Init `create-react-app`
  - [x] Set styleguide
  - [x] Config lint script
- [ ] Pitch
  - [ ] Prototype
  - [ ] Scalability
  - [ ] What, How, Why?
  - [ ] Google Slides
- [ ] Design
  - [ ] Logo
  - [ ] Define color pallet
  - [x] UI / UX ideas
    - [x] Multiple services
  - [ ] Attach App's mockups
  - [ ] Make a tray icon
- [ ] Electron
  - [ ] Integrate electron
  - [ ] Configure menu/task manager
  - [ ] Handle needed native events
    - [ ] Add notifications support
    - [ ] Hotkeys support (use tab to navigator)
- [ ] ReactJS
  - [ ] Install `material-ui`
  - [ ] Setup Project Structure
    - [ ] Add dummy components
    - [ ] Add dummy screens
    - [ ] Add dummy containers
  - [ ] Install `Redux`
    - [ ] Setup the redux store
    - [ ] Use `redux-thunk`
    - [ ] Keep stored data via `redux-persist`
  - [ ] Navigation
    - [ ] TabNavigator Structure
      - [ ] Style
      - [ ] Icons
    - [ ] Sub-menu modal or something like that
    - [ ] Use `react-router`
  - [ ] Fixtures
    - [ ] 42API
      - [ ] 42API_userData.json
      - [ ] 42API_userList.json
    - [ ] appData.json
      - [ ] navTabs (boolean flags)
      - [ ] defaultLanguage
      - [ ] messageOfTheDay
      - [ ] defaultTheme
  - [ ] Firebase
    - [ ] Validate login
  - [ ] Add Screens
    - [ ] Login
      - [ ] Validate data
      - [ ] Use 42 API (fixture for now)
    - [ ] Home Screen
      - [ ] CV Generator via QR Code and tinyurl thingy
      - [ ] Settings
        - [ ] Change password
        - [ ] Toggle services (all on by default)
        - [ ] Language selector
        - [ ] Change themes (day-night)
    - [ ] Intra
    - [ ] Slack
    - [ ] Campus
    - [ ] Cantina
    - [ ] E-commerce (sub-menu)
      - [ ] 42 Shop
      - [ ] Crowd-funding
      - [ ] Bazaar
    - [ ] Dorms
  - [ ] Integrate easter eggs via `cheat.js`
    - [ ] Add `boku no hero` references as easter egg
    - [ ] Video games reference too
    - [ ] And a bit about HGTtG
  - [ ] Install `i18n`
    - [ ] Configure the module
    - [ ] Integrate to app
    - [ ] Add languages
      - [ ] English
      - [ ] Spanish
      - [ ] German
      - [ ] French
      - [ ] Russian
      - [ ] Portuguese
- [ ] Housekeeping
  - [ ] Refactor code
  - [ ] Apply code styleguide (lint)
  - [ ] Remove unnecessary modules
  - [ ] Keep up to date!

## Sources

- [How to build an Electron app using create-react-app - Christian Sepulveda's](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)

## License

This project is under the MIT License.
Meaning that you can use, copy, modify, merge, publish, distribute,
sub-license, and/or sell copies of the final products, under some conditions.
See the `LICENSE` file for more details.
