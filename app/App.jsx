/*** 
 * QUICKSTART : 
 *    Replace "<ExampleApp />" with your first parent component 
 *    and you're ready to start creating!
 ***/

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ExampleApp from './components/example/ExampleApp.jsx';
require( './css/app.scss' ); //Bundled Styles - TELLS WEBPACK TO BUILD STYLES - DO NOT REMOVE

class App extends Component {
  constructor( props ) {
    super( props );
  }


  render() {
    return (
      <div className="app-wrapper" data-component="App.jsx">
        <Route component={ ExampleApp } />
      </div>
    );
  }
}

export default App;