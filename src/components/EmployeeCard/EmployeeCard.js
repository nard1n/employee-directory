import React from 'react';

function EmployeeCard(props) {
    return (
        <div className="card col s12 m6 l4">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.data.picture.large} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {props.data.name.first} {props.data.name.last}<i className="material-icons right">more_vert</i>
                </span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    {props.data.name.first} {props.data.name.last} ({props.data.dob.age})<i className="material-icons right">close</i><br/><br/>
                    <p>Phone: {props.data.phone}</p>
                    <p>Email: {props.data.email}</p>
                </span>

            </div>
        </div>
    );
}

export default EmployeeCard;