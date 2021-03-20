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
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    Employee Name<i className="material-icons right">close</i>
                </span>
                <div className="content">
                    <ul>
                        <li>
                             <strong>Name:</strong> {/*{props.name} */}
                        </li>
                        <li>
                            <strong>Occupation:</strong> {/*{props.occupation}*/}
                        </li>
                        <li>
                            <strong>Address:</strong> {/*{props.location}*/}
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default EmployeeCard;