import React from "react";

function Pagination() {
    
    return(
        <div>
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
        </div>
    )
}

export default Pagination;