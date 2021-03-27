import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

function EmployeeList(props) {
    return (
        <div className="container row">
            {props.employees.map((person, index) => (
                <EmployeeCard data={ person } key={ index } />
            ))}
        </div>
    );
}

export default EmployeeList;