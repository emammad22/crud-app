import { useEffect, useState } from "react";
import { useEmployeeList } from "../firebase";
import Employee from "./Employee";

function EmployeeList() {


    const list = useEmployeeList();
    console.log(list);

    return (
        <main className="main">
            <div className="container">
                <div className="main-inner">
                    <table className="employeeList">
                        <thead className="list-head">
                            <tr>
                                <th>
                                    <input type="checkbox" id="selectAll" />
                                    <label htmlFor="selectAll"></label>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="list-body">
                            {list?.map((employee, index) => {
                                return <Employee
                                    id={employee.id}
                                    key={index}
                                    name={employee.name}
                                    email={employee.email}
                                    address={employee.address}
                                    phone={employee.phone}
                                />;
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default EmployeeList;