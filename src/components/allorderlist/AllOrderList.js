import React, { useState } from 'react';

const AllOrderList = ({orderList}) => {
    const {name, email, course, details, status} = orderList;

    const [orderId, setOrderId] = useState({})
    
    const [select, setSelect] = useState({select:status});
    const handleId = (id)=>{
        setOrderId(id)
    }

    const handleChange = e =>{
        const newSelect = {...select};
              newSelect.select = e.target.value;
              setSelect(newSelect)
              fetch('http://localhost:4000/update/' + orderId, {
                  method:"PATCH",
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify(newSelect)
              })
              .then(res => res.json())
              .then(data => {
                  if(data){
                      alert('updated item')
                  }
              })
              
    }

    
    
    return (
        <div>
            <table class="table table table-dark">
                        
                        <tbody>
                            <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{course}</td>
                            <td>{details}</td>
                            <td>
                                <select onChange={handleChange} onClick={()=>handleId(orderList._id)} value={select.select} >
                                    <option value="Pending">Pending</option>
                                    <option value="Done">Done</option>
                                    <option value="On going">On going</option>
                                </select>
                            </td>
                            </tr>
                        </tbody>
                        </table>
        </div>
    );
};

export default AllOrderList;