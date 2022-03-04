import React from "react";
function Search() {
    return(
    <div>
        <form>
        <div className="form-group container ">
            <div className="">
            <label for="formGroupExampleInput"><h5>!Descubre Pokemones!</h5></label>
            <div className="d-flex justify-content-center">
            <input type="text" className="form-control margin no-width center" id="formGroupExampleInput" placeholder="ej:.Charizard"/>
            <input class="btn btn-primary" type="submit" value="Buscar"/>
            </div>
            </div>
        </div>
        </form>

    </div>
    )
}

export default Search;
