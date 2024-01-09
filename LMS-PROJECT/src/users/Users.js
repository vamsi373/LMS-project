import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { UserContext } from './UserContext';

import AddUser from "./AddUser";
import UserList from "./UserList";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, []);
    const getAllUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            setUsers(response.data);
        }).catch(error => {

        });
    };
    const userActions = (actionName, data) => {
        if (actionName === 'add') {
            setUsers([...users, {id: users.length + 1, ...data}]);
        } else {
            setUsers(users.filter(user => user.id !== data));
        }
    }
    return (
        <div className="container">
            <div className="row">
                <UserContext.Provider value={{users: users, userActions}}>
                    <UserList></UserList>
                    <AddUser></AddUser>
                </UserContext.Provider>
            </div>
        </div>
    )
}

export default Users;