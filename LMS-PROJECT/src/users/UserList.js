import User from './User';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
function UserList() {
    const { users, userActions } = useContext(UserContext);
    console.log(users);
    const deleteUser = (id) => {
        userActions('delete', id);
        alert('User deleted successfully');
    }
    return (
        <div className="col-sm">
            <h2>User List</h2>
            {users.map(user => (
                <div className="my-2 py-2 border-bottom">
                    <h5>Id: {user.id}</h5>
                    <h5>Name: {user.name}</h5>
                    <h5>Username: {user.username}</h5>
                    <h5>Address: {user.address.street}</h5>
                    <h5>Phone No: {user.phone}</h5>
                    <h5>Company Name: {user.company.name}</h5>
                    <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default UserList;