import React , { Component } from 'react';
import './sass/main.scss';
import ReadingMenu from './component/reading_menu';
import Articles from './component/articles';

function App() {
  return (
    <div className="App">
      {/* <ReadingMenu /> */}
      <Articles />
      
    </div>
  );
}

export default App;
