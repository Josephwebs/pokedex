import React from 'react'
import Header from '../Header'
import Pagination from '../Pagination'
const Layout = () => {
  return (
    <div className='App text-center'>
        <Header/>
    <div className="pokemon-container">
    </div>
    <div id="spinner" className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    <Pagination/>
    </div>
  )
}

export default Layout;