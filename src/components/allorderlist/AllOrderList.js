import React from 'react';

const AllOrderList = ({orderList}) => {
    const {name, email, course, details} = orderList;
    return (
        <div>
            <table class="table table table-dark">
                        
                        <tbody>
                            <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{course}</td>
                            <td>{details}</td>
                            <td>pending</td>
                            </tr>
                        </tbody>
                        </table>
        </div>
    );
};

export default AllOrderList;