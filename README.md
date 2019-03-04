# Redux Quiz

## Components

* `App.js`
  * Presentational/Functional component
* `Controls.js`
  * Presentational/Functional component
  * Text input for title
  * Text input for subtitle
* `Display.js`
  * Presentational/Functional component
  * Display title in an h1
  * Display subtitle in an h2

## Containers

* `TitleSubtitleEditor.js`
  * Container
  * select title and subtitle
  * dispatch actions to update title and subtitle
* `TitleSubtitleDisplay.js`
  * Container
  * select title and subtitle

## Tests

Snapshot test all components. Use `toMatchSnapshot()`
to create a snapshot.

Unit test reducer, actionCreators, and selectors.

## Rubric

* Tests: 20pts
* Components: 5pts
* Clean style: 5pts
* State management: 20pts
