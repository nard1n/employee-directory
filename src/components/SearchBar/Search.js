import React from "react";
import Sort from '../Sort/Sort';

function Search(props) {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col s8">
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search by name"
                onChange={props.change}
              />
              <label className="label-icon" for="search"></label>
            </div>
          </div>

              <Sort sort={ props.sort } />
        </div>
      </form>
    </div>
  );
}

export default Search;
