import React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import Bookmark from './Bookmark';
import bookmarksData from '../data/bookmarks';
import '../stylesheets/Bookmarks.css';

const Bookmarks = (props) => {
  const pivots = Object.keys(bookmarksData).map(key => {
    const bookmarks = bookmarksData[key].map(bookmark => <Bookmark bookmark={bookmark} />);
    return <PivotItem linkText={key} className='content'> {bookmarks} </PivotItem>;
  });

  return (
    <div className='bookmarks'>
      <Label className='title'>Bookmarks:</Label>
      <Pivot linkSize={PivotLinkSize.large}>
         {pivots}
       </Pivot>
    </div>
  );
}

export default Bookmarks;
