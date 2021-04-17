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

    let style = {color:'', backgroundColor:''}
    if(select.select === "Pending"){
        style.color = 'white';
        style.backgroundColor = 'red';
    }
    if(select.select === "Done"){
        style.color = 'white';
        style.backgroundColor = 'green';
    }
    if(select.select === "On going"){
        style.color = 'white';
        style.backgroundColor = 'blue';
    }

    const pendingStyle = {color:'white', backgroundColor:'red'}
    const doneStyle = {color:'white', backgroundColor:'green'}
    const goingStyle = {color:'white', backgroundColor:'blue'}

    
    
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
                                <select onChange={handleChange} style={style} onClick={()=>handleId(orderList._id)} value={select.select} >
                                    <option style={pendingStyle} value="Pending">Pending</option>
                                    <option style={doneStyle} value="Done">Done</option>
                                    <option style={goingStyle} value="On going">On going</option>
                                </select>
                            </td>
                            </tr>
                        </tbody>
                        </table>
        </div>
    );
};

export default AllOrderList;