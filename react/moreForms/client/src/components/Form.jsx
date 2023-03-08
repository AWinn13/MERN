import React, { useState } from "react";

const Form = (props) => {
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [confirmPassword, setConfirm] = useState("");

    const create = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
    };
    return (
        <div>
            <div class='container w-50'>
                <form action=''>
                    <div class='form-floating mb-2 border'>
                        <input
                            onChange={(e) => setFirst(e.target.value)}
                            class='form-control'
                            type='text'
                            id='fname'
                            placeholder='First Name'
                        />
                        <label for='fname'>First Name</label>
                    </div>
                    <div class='form-floating mb-2'>
                        <input
                            onChange={(e) => setLast(e.target.value)}
                            class='form-control'
                            type='text'
                            id='lname'
                            placeholder='Last Name'
                        />
                        <label for='fname'>Last Name</label>
                    </div>
                    <div class='form-floating mb-2'>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            class='form-control'
                            type='text'
                            id='email'
                            placeholder='Email'
                        />
                        <label for='fname'>Email</label>
                    </div>
                    <div class='form-floating mb-2'>
                        <input
                            onChange={(e) => setPass(e.target.value)}
                            class='form-control'
                            type='password'
                            id='pword'
                            placeholder='Password'
                        />
                        <label for='pword'>Password</label>
                    </div>
                    <div class='form-floating'>
                        <input
                            onChange={(e) => setConfirm(e.target.value)}
                            class='form-control'
                            type='password'
                            id='confirm'
                            placeholder='Confirm Password'
                        />
                        <label for='pword'>Confirm Password</label>
                    </div>
                </form>
                <div class='border'>
                    <p>
                        First Name: <p>{firstName}</p>
                    </p>
                    <p>
                        Last Name: <p>{lastName}</p>
                    </p>
                    <p>
                        Email: <p>{email}</p>
                    </p>
                    <p>
                        Password: <p>{password}</p>
                    </p>
                    <p>
                        Confirm: <p>{confirmPassword}</p>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Form;
