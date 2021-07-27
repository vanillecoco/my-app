import React, {useState, useEffect} from 'react';
import UserComponent from './UserComponent';


function Users(){
    

    const[users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setUsers(json)); 
    }, []);

    return (
        <>
        <h1> Fetching data from a third party API </h1>
        <div>
            <UserComponent data ={users} />
        </div>
        </>
    )

}

export default Users;
