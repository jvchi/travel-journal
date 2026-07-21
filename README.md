# Travel Journal

A travel journal that displays trip entries as a vertical list of cards.

Each entry includes a photo, country, location, travel dates, a short description, and a Google Maps link. Built as a composable React app with data mapped into a reusable `Entry` component.

## Features

- Journal entries rendered from a data array
- Country, location, date range, and description per trip
- External Google Maps links
- Responsive card layout

## Prerequisites

- Node.js 20+
- npm

## Getting started

```sh
git clone https://github.com/jvchi/travel-journal.git
cd travel-journal
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build

```sh
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Header.jsx         # page header
    Entry.jsx          # single journal entry card
    data.js            # trip data
  App.jsx
  assets/              # local images
```
