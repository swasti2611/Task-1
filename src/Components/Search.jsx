import React from 'react'
import '../styles/search.css'
import SearchIcon from '../assets/SearchIcon.jpg'
const Search = () => {
  return (
    <>
      <div className='SearchBar'>
        <div className='Search-content'>
           <img src={SearchIcon}/>
          <input type='text' placeholder='search here...'/>
        </div>
    </div>
    </>
  )
}

export default Search
