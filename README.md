# Team Directory — Vue 2 + Vuetify 1.5

A small but complete single-page app built with **Vue 2.6** and **Vuetify 1.5**.

It's a team directory: browse members in a data table and list, add new members,
and refresh the roster from a public API.

## Stack

- **Vue 2.6** — options API, global filters, `Vue.prototype`, `new Vue().$mount`
- **Vuetify 1.5** — `v-toolbar`, `v-navigation-drawer`, `v-list-tile`, `v-layout`/`v-flex` grid
- **vue-router 3** — `/`, `/team`, `/about`
- **Vuex 3** — members state, getters (lodash-sorted), an axios-backed `fetchMembers` action
- **axios** — fetches members (with an offline seed fallback)
- **lodash** — `orderBy` for stable sorting
- **moment** — timestamp formatting

## Project structure

```
public/index.html      HTML entry (loads Roboto + Material Icons)
src/main.js            Vue 2 bootstrap: Vuetify, router, store, global filter
src/App.vue            Toolbar + navigation drawer + <router-view>
src/router/index.js    vue-router routes
src/store/index.js     Vuex store (members, getters, fetchMembers action)
src/views/             Home.vue, Team.vue, About.vue
src/components/        UserCard, DataList, EventChild, FunctionalOld, RenderOld
src/eventBus.js        Event bus (new Vue()) used by UserCard -> EventChild
```

## Run it

```bash
npm install
npm run serve     # dev server on http://localhost:8080
npm run build     # production build to dist/
```

> Note: this is an intentionally Vue-2-era codebase (Vuetify 1.5 grid, `.sync`,
> global filters, event bus, `render(h)`, functional components, old slot syntax).
> It also serves as the fixture for the Migration Assistant, which upgrades it to
> Vue 3 + Vuetify 3.
