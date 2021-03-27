import React from 'react';

function Sort(props) {
    return(
    <div className="col s3">
        <button 
        className="waves-effect waves-light btn-small"
        onClick={props.sort}
        >
            Sort A-Z
        </button>
    </div>
    );
}

export default Sort;