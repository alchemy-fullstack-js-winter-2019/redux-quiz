import React, { Fragment } from 'react';
import TitleSubtitleEditor from '../../containers/TitleSubtitleEditor';
import TitleSubtitleDisplay from '../../containers/TitleSubtitleDisplay';
import './App.css';
import 'normalize.css';

export default function App() {
  return (
    <Fragment>
      <TitleSubtitleEditor />
      <TitleSubtitleDisplay />
    </Fragment>
  );
}
