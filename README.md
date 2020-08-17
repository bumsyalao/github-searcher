# Github-searcher

Search through github users and repository.

## Table of Contents


<!-- AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Click to expand</summary>

- [Development](#development)
- [Installation](#installation)
- [Usage](#usage)
- [Structure](#structure)
- [Limitations](#Limitations)
- [Screenshots](#screenshots)

</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Development

This single page application was built with; NodeJS with expressJS to create API server, Redis was used to cache persisted data.
> I set Redis cache with a cacheKey containing search query, per_page & page for pagination and URL to distinguish between get-user and get-repository. Cached data has an expiry time of 2hours.

The app is built using a microservice architecture, the client consumes two API endpoints:

* http://localhost:8000/get-user
* http://localhost:8000/get-repository
> see swagger documentation for more information [Swagger](https://github.com/bumsyalao/github-searcher/blob/master/swagger.json)

The frontend app is built with create-react-app and uses redux-persist store, to cache persisted data.

The App.tsx is the entry page and renders the SearchBar which has an input form, filter, and result pagination. I used react-paginate for the pagination component.

> The redux has three main asynchronous actions to searchUser, searchRepos, and clearSearchResult. clearSearchResult is called to clear cache and set appReducer to the initial state.

I used sass to indent and beautify CSS.
> I chose not to display the searchBar at the center of the page because the UX is more appealing with the current design

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


## Structure

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

## Limitations
* Github API doesn't provide location key in response, so this is not displayed in the user cards.
* Beginner knowledge of typescript.

## Screenshots

![index page](https://res.cloudinary.com/dcpfdxsly/image/upload/v1597677602/Screenshot_2020-08-17_at_16.56.18_oacpdg.png)

![search page](https://res.cloudinary.com/dcpfdxsly/image/upload/v1597692247/Screenshot_2020-08-17_at_23.22.13_nlldbv.png)