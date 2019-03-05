import React from 'react';
import Controls from '../../containers/TitleSubtitleEditor';
import Display from '../../containers/TitleSubtitleDisplay';
import './App.css';

export default function App() {
  return (
    <>
    <header>
      <h1>Redux Quiz</h1>
      <p>Enter a title and subtitle!</p>
    </header>
      <Controls />
      <Display />
    </>
  );
}
