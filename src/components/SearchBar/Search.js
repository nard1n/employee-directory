import React from "react";

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
              <i className="material-icons">close</i>
            </div>
          </div>
          <div className="col s3">
            <button className="waves-effect waves-light btn-small">
              Sort by Experience
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
