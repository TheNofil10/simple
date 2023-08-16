import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()

    const [data, setData] = useState({
        username: "",
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const {username} = data
        try {
            const {data} = await axios.post('/login', {
                username,
            });
            if(data.error){
                toast(data.error)
            } else {
                setData({});
            }
        } catch (error) {
            
        }
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center mx-auto align-middle p-5 vh-100 justify-content-center" >
                <div>
                    <h2>button</h2>
                </div>
                <form className="d-flex flex-column align-items-center p-5" onSubmit={loginUser}>
                    <label className='p-4'>

                        <input type="text" name="username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})}/>
                    </label>
                    <button type="submit">send</button>
                </form>
            </div>
        </>
    )
}