import React, { Component } from 'react';
import Bookmarks from './Bookmarks';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="application">
        <CommandBar
          className="app-bar"
          isSearchBoxVisible={false}
        />

        <div className="bookmark-section">
          <Bookmarks />
        </div>
      </div>
    );
  }
}

export default App;
