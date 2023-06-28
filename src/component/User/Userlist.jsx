import React, { useEffect, useState } from 'react';
import '../User/Userlist.css';
import { Link } from 'react-router-dom';
import axios from 'axios';




function UserList(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          console.log("RESPONSE LENGHT::",response.data.length)
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

 const addUser= async()=>{
 
}

    return (

        <div className="tables" >           
            <div style={{marginLeft:'87%'}}><Link to='/addUser'><button className='btn btn-primary' onClick={addUser}> Add User</button></Link></div>
            <span className='spans'>User List</span>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                     {data.map((item) => (                        
              <tr key={item.id}>
               <td>{item.id}</td> 
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
              </tr>
          ))}                    
                </tbody>
            </table>
            <div className='paginations'>
                <nav aria-label="Page navigation example" style={{marginTop:'2px'}}>
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled"><Link className="page-link">Previous</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                    </ul>
                </nav>

            </div>
        </div>



    )
}

export default UserList
