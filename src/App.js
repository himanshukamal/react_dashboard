import React , { Component } from 'react';
import './sass/main.scss';
import ReadingMenu from './component/reading_menu';
import Articles from './component/articles';
import Analytics from './component/analytics';

function App() {
  return (
    <div className="App">
      <ReadingMenu />
      {/* <Articles />
      <Analytics /> */}
    </div>
  );
}

export default App;
