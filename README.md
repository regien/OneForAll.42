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

Clone the repository

```
git clone https://github.com/jraleman/OneForAll.42 OneForAll.42/
cd OneForAll.42/
```

Install dependencies

```
npm install
```

or

```
yarn install
```

Then, start the node server

```
npm start
```

Use `&` to put it in the background

```
npm start &
```

And run the electron instance

```
npm run electron
```

## Project Structure

The idea of having a good project structure is to have a cross platform
project, to maximize code reuse, keep the configurations out of the code,
and minimize the component state.

This is the main idea:

```
src/
├── actions/
│   ├── constants.js
│   └── index.js
├── App.js
├── components/
│   ├── AppHeader/
│   │   ├── AppHeader.js
│   │   ├── index.js
│   │   └── styles.js
│   └── TabNavbar/
│       ├── index.js
│       ├── styles.js
│       └── TabNavbar.js
├── config/
│   ├── AppConfig.js
│   └── index.js
├── containers/
│   ├── LanguagesContainer/
│   │   ├── index.js
│   │   ├── LanguagesContainer.js
│   │   └── styles.js
│   ├── RootContainer/
│   │   ├── index.js
│   │   └── RootContainer.js
│   ├── ServicesContainer/
│   │   ├── index.js
│   │   ├── ServicesContainer.js
│   │   └── styles.js
│   └── ThemesContainer/
│       ├── index.js
│       ├── styles.js
│       └── ThemesContainer.js
├── electron/
│   ├── icon.png
│   ├── renderer.js
│   ├── starter.js
│   ├── tray.js
│   └── window.js
├── fixtures/
│   ├── 42API/
│   │   └── json/
│   │       ├── userData1.json
│   │       ├── userData2.json
│   │       ├── userData3.json
│   │       └── userList.json
│   ├── index.js
│   └── OneForAll/
│       └── json/
│           └── appData.json
├── i18n/
│   ├── index.js
│   └── languages/
│       ├── de.json
│       ├── en.json
│       ├── es.json
│       ├── fr.json
│       ├── pt.json
│       └── ru.json
├── index.js
├── navigation/
│   └── ServiceNavigation/
│       ├── index.js
│       └── ServiceNavigation.js
├── reducers/
│   └── index.js
├── registerServiceWorker.js
├── screens/
│   ├── HomeScreen/
│   │   ├── HomeScreen.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── LoginScreen/
│   │   ├── index.js
│   │   ├── LoginScreen.js
│   │   └── styles.js
│   ├── OnboardingScreen/
│   │   ├── index.js
│   │   ├── OnboardingScreen.js
│   │   └── styles.js
│   └── ServiceScreen/
│       ├── index.js
│       ├── ServiceScreeen.js
│       └── styles.js
├── themes/
│   ├── colors.js
│   ├── images/
│   │   └── logo.svg
│   ├── images.js
│   ├── index.js
│   └── metrics.js
└── transforms/
    ├── getAvgExp.js
    └── getAvgHearts.js
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

#### Primary (Stone Yellow)

![#3D444E](http://via.placeholder.com/150/3D444E/000000?text=3D444E)
![#7E8792](http://via.placeholder.com/150/7E8792/ffffff?text=7E8792)
![#C4B9B0](http://via.placeholder.com/150/C4B9B0/000000?text=C4B9B0)
![#FEA700](http://via.placeholder.com/150/FEA700/000000?text=FEA700)
![#9B4900](http://via.placeholder.com/150/9B4900/000000?text=9B4900)

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
- [Cristian Franco](https://github.com/cristianmusic7)

## Goals

- [x] Start
  - [x] Nuke the repo, start from scratch!
  - [x] Rename repo -> `OneForAll.42`
  - [x] Init `create-react-app`
  - [x] Set styleguide
  - [x] Config lint script
- [x] Pitch
  - [x] Prototype
  - [x] Scalability
  - [x] What, How, Why?
  - [ ] Google Slides
  - [ ] Generate static site from README.md markdown
- [x] Design
  - [x] Logo
  - [x] Define color pallet
  - [x] UI / UX ideas
    - [x] Multiple services
  - [x] Attach App's mockups
  - [x] Prototype mockups
  - [x] Make a tray icon
- [ ] Electron
  - [x] Integrate `electron`
    - [x] Install the module as dev (`npm install --save-dev electron`)
    - [x] Follow [Christian Sepulveda's guide](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)
    - [x] Install `foreman`, allow executing the app from command line
    - [x] Install `electron-builder` and add build script
    - [x] Follow [flaviocopes' guide](https://flaviocopes.com/react-electron/)
  - [x] System tray
  - [ ] Configure menu/task manager
  - [ ] Handle needed native events
    - [ ] Add notifications support
    - [ ] Hotkeys support (use tab to navigator)
- [ ] ReactJS
  - [x] Integrate `material-ui`
    - [x] Install the module (`npm install @material-ui/core`)
  - [x] Setup Project Structure
    - [x] Add empty files
    - [x] `tree` directory `./src/`
    - [x] Add dummy components
    - [x] Add dummy screens
    - [x] Add dummy containers
  - [x] Fixtures
    - [x] Add basic module structure
    - [x] 42API
      - [x] Make a real api call, and copy the data to
        - [x] userData.json
        - [x] userList.json
    - [x] appData.json
      - [x] userData
      - [x] settingsData
  - [x] Components
    - [x] AppHeader
    - [x] TabNavbar
  - [x] Containers
    - [x] RootContainer
    - [x] LanguagesContainer
    - [x] ServicesContainer
    - [x] ThemesContainer
  - [ ] Screens
    - [ ] Onboarding
    - [ ] Login
      - [ ] Validate data
      - [ ] Use 42 API (fixture for now)
    - [ ] Home Screen
      - [ ] Add Avatar
      - [ ] Basic Info
      - [ ] Responsive Banner
      - [ ] CV Generator via QR Code and tinyurl thingy
      - [ ] Settings
        - [ ] Change password
        - [ ] Toggle services (all on by default)
        - [ ] Language selector
        - [ ] Change themes (day-night)
    - [ ] Services (not working that great...)
      - [x] Intra
      - [x] Slack
      - [x] Campus
      - [x] Cantina
      - [ ] E-commerce (sub-menu)
        - [x] 42 Shop
        - [ ] Crowd-funding
        - [ ] Bazaar
      - [x] Dorms
  - [ ] Integrate easter eggs via `cheat.js`
    - [ ] Add `boku no hero` references as easter egg
    - [ ] Video games reference too
    - [ ] And a bit about HHGttG
  - [ ] Integrate `i18n`
    - [x] Install the module  (`npm install --save react-i18n`)
    - [ ] Configure the module
    - [ ] Add languages
      - [ ] English
      - [ ] Spanish
      - [ ] German
      - [ ] French
      - [ ] Russian
      - [ ] Portuguese
  - [ ] Integrate `redux`
    - [x] Install the module (`npm install --save redux`)
    - [ ] Setup the redux store
    - [ ] Use `redux-thunk` (`npm install --save redux-thunk`)
    - [ ] Keep stored data via `redux-persist`  (`npm install --save redux-persist`)
  - [x] Navigation
    - [x] TabNavigator Structure
      - [x] Style
      - [x] Icons
    - [ ] Sub-menu modal or something like that
    - [ ] Use `react-router` (`npm install --save react-router`)
  - [ ] Firebase
    - [ ] Validate login
- [ ] Housekeeping
  - [ ] Refactor code
  - [ ] Apply code styleguide (lint)
  - [ ] Remove unnecessary modules
  - [ ] Keep up to date!

## Sources

- [electron-quick-start](https://github.com/electron/electron-quick-start)
- [Christian Sepulveda's - How to build an Electron app using create-react-app](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)
- [Flaviocopes - react-electron)](https://flaviocopes.com/react-electron/)
- [Emir Bakhtarov's - Handling of iframes in React](https://medium.com/@ebakhtarov/handling-of-iframes-in-react-f038be46ac24)
- [Universal Native Boilerplate](https://github.com/c-h-/universal-native-boilerplate)

## License

This project is under the MIT License.
Meaning that you can use, copy, modify, merge, publish, distribute,
sub-license, and/or sell copies of the final products, under some conditions.
See the `LICENSE` file for more details.
