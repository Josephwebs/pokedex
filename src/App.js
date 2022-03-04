import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
function App() {
  return (
    <div className='App text-center'>
        <Header/>
        <Search/>
    <div className="pokemon-container">
    </div>
    <nav className="pagination" aria-label="...">
        <ul className="pagination">
          <li className="page-item" id="previous">
            <a className="page-link" href="#" tabindex="-1">Anterior</a>
          </li>
          <li className="page-item" id="next">
            <a className="page-link" href="#">Siguiente</a>
          </li>
        </ul>
      </nav>
    <div id="spinner" className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    <script src="./main.js"></script>
    </div>
    
  );
}

export default App;
