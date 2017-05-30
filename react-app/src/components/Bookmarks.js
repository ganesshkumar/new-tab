import React from 'react'
import Bookmark from './Bookmark'
import '../stylesheets/Bookmarks.css'

const Bookmarks = (props) => {
  const bookmarkViews = props.bookmarks.map(bookmark => {
    return <Bookmark key={bookmark.url} bookmark={bookmark} />
  })

  return (
    <div className='bookmarks'>
      <div className='title'> {props.title} </div>
      <div className='content'> {bookmarkViews} </div>
    </div>
  )
}

export default Bookmarks
