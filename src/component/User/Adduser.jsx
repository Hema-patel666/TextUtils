import React,{useEffect,useState} from 'react';
import '../User/Adduser.css';



function AddUser(){
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Name:', name);
      console.log('Email:', email);
      // Reset form fields
      setName('');
      setUsername('');
      setEmail('');      
      setWebsite('');


    };
  
    return (
        <div className='add'>
      <span style={{fontWeight:'bold'}}>Add User Form</span>
      <div className="addUser">
      <form className='form' onSubmit={handleSubmit}>
      <div className="form-group ">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        
        <div className="form-group ">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    )
}

export default AddUser ;