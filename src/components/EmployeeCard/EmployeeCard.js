import React from 'react';

function EmployeeCard() {
    return (
        <>
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/office.jpg" />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    Employee Name <i className="material-icons right">more_vert</i>
                </span>
                <p>
                    <a href="#">This is a link</a>
                </p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    Employee Name<i className="material-icons right">close</i>
                </span>
                <p>Here is some more information about this employee.</p>
            </div>
        </div>
        </>
    );
}

export default EmployeeCard;