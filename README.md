# Github-searcher

Search through github users and repository.

## Table of Contents


<!-- AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Click to expand</summary>

- [Development](#development)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Structure](#structure)
- [Screenshots](#screenshots)
- [Limitations](#Limitations)
- [ToDo](#Todo)

</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Development
This single page application was built with:
- ReactJS.
- TypeScript.
- Redux-persist to persist and rehydrate redux store.
- ExpressJS.
- REDIS to cache persisted data on the server-side.
- SASS

## Installation
Github-searcher requires 
- [Node.js](https://nodejs.org) version 8 or above.
- [Redis](https://redis.io/).

Install all dependencies:
```bash
npm install
```
Start server on http://localhost:8000/
```bash
npm run start-dev
```
Start React-Redux app on http://localhost:3000/
```bash
npm start 
```
## Usage
- Enter 3 or more characters to search github user or repository.
- Filter search by choosing users or repository.
- Results are paginated to allow you browse through multiple pages.

## Documentation

## Structure
### Folder structure
    ├── public
    │   └── index.html
    ├── server
    │   ├── routes.ts
    │   └── server.ts
    │── src
    │   ├── __test__
    │   │   └── App.test.tsx     
    │   ├── actions
    │   │   └── appActions.ts
    │   ├── components
    │   │   ├── Dashboard.tsx
    │   │   ├── ResultCard.tsx
    │   │   └── SearchBar.tsx         
    │   ├── reducers
    │   │   ├── appReducer.ts
    │   │   └── rootReducer.tsx
    │   ├── scss
    │   │   ├── App.scss
    │   │   ├── Dashboard.scss
    │   │   ├── index.scss
    │   │   └── SearchBar.scss
    │   ├── App.tsx
    │   ├── configureStore.ts
    │   └──index.tsx 
    ├── package.json
    ├── tsconfig.json
    ├── README.md
    └── tsconfig.server.json



## Screenshots

![index page](https://res.cloudinary.com/dcpfdxsly/image/upload/v1597677602/Screenshot_2020-08-17_at_16.56.18_oacpdg.png)

![search page](https://res.cloudinary.com/dcpfdxsly/image/upload/v1597677603/Screenshot_2020-08-17_at_19.04.47_a1ys4x.png)