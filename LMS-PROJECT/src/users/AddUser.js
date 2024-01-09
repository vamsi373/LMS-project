import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddUser() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        username: '',
        address: {
            street: ''
        },
        phone: '',
        company: {
            name: ''
        }
    });
    const { userActions } = useContext(UserContext);

    const addUser = () => {
        userActions('add', userInfo);
        setUserInfo({
            name: '',
            username: '',
            address: {
                street: ''
            },
            phone: '',
            company: {
                name: ''
            }
        });
        alert('User added successfully');
        // toast.success('🦄 User added successfully!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     });
    };
    const onFormFieldChange = (formField, value) => {
        if (formField === 'address') {
            setUserInfo({...userInfo, address: {street: value}});
        } else if (formField === 'company') {
            setUserInfo({...userInfo, company: {name: value}});
        } else {
            setUserInfo({...userInfo, [formField]: value});
        }
    };
    return (
        <div className="col-sm">
            <h2>Add User</h2>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" value={userInfo.name} onChange={(event) => onFormFieldChange('name', event.target.value)} placeholder="Enter Name" />
            </div>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" value={userInfo.username} onChange={(event) => onFormFieldChange('username', event.target.value)} placeholder="Enter Username" />
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" value={userInfo.address.street} onChange={(event) => onFormFieldChange('address', event.target.value)} placeholder="Enter Address" />
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone No</label>
                <input type="text" class="form-control" id="phone" value={userInfo.phone} onChange={(event) => onFormFieldChange('phone', event.target.value)} placeholder="Enter Phone" />
            </div>
            <div class="mb-3">
                <label for="company" class="form-label">Company Name</label>
                <input type="text" class="form-control" id="company" value={userInfo.company.name} onChange={(event) => onFormFieldChange('company', event.target.value)} placeholder="Enter Company Name" />
            </div>
            <button className="btn btn-success" onClick={addUser}>Save</button>

            {/* <ToastContainer /> */}

        </div>
    )
}

export default AddUser;