import React, { Component } from 'react'
import Bookmarks from './Bookmarks'
import bookmarksData from '../data/bookmarks'
import '../stylesheets/App.css'

class App extends Component {
  render() {
    const bookmarksView = Object.keys(bookmarksData).map(key => {
      return <Bookmarks key={key} title={key} bookmarks={bookmarksData[key]} />
    })

    return (
      <div className="application">
        <div className="bookmark-section">
          {bookmarksView}
        </div>
      </div>
    );
  }
}

export default App
