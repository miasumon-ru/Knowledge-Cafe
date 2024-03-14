

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  // useState

  const [bookmarks , setBookmarks] = useState([])

  const [readingTime, setReadingTime] = useState(0)

  // handle event function

  const handleBookmark = blog =>{
   
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const handleReadingTime = (time, id) =>{

    setReadingTime (readingTime + time)

    const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remaining)
  }




  return (
    <>

     <Header> </Header>

     <div className='flex justify-between max-w-7xl mx-auto'>
     <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} > </Blogs>
     <Bookmarks readingTime={readingTime} bookmarks={bookmarks} > </Bookmarks>
     </div>

    
    
    </>
  )
}

export default App
