import React from 'react'
import parseDomain from 'parse-domain'
import '../stylesheets/Bookmark.css'

const Bookmark = (props) => {
  const url = parseDomain(props.bookmark.url)

  const parts = props.bookmark.url.split('/')
  var mountpoint = ''
  const constructedUrl = [url.subdomain, url.domain, url.tld].filter(x => x).join('.')
  if (parts[parts.length - 2] === constructedUrl) {
    mountpoint = parts[parts.length - 1]
  }

  const bookmarkStyle = {
    backgroundColor: props.bookmark.style.backgroundColor
  }

  const anchorStyle = {
    color: props.bookmark.style.color,
    backgroundColor: props.bookmark.style.backgroundColor
  }

  return (
    <div className='bookmark' style={bookmarkStyle}>
      <a
        href={props.bookmark.url}
        style={anchorStyle}
        rel="noopener noreferrer"
      >
        <div className='super'> {mountpoint ? url.domain : (url.subdomain || 'www')} </div>
        <div className='main'> {mountpoint ? mountpoint : url.domain} </div>
        <div className='sub'> {url.tld} </div>
      </a>
    </div>
  )
}

export default Bookmark
