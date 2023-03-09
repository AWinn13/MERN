import React, { useState } from 'react';

const Form = (props) => {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [firstNameError, setFirstError] = useState('');
  const [lastNameError, setLastError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPassError] = useState('');
  const [confirmPasswordError, setConfirmError] = useState('');
  const [didSubmit, setdidSubmit] = useState(false);

  const create = (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    setdidSubmit(true);
  };
  const handleFirst = (e) => {
    setFirst(e.target.value);
    if (e.target.value.length < 2) {
      setFirstError('First Name must be longer than 2 characters');
    } else {
      setFirstError('');
    }
  };
  const handleLast = (e) => {
    setLast(e.target.value);
    if (e.target.value.length < 2) {
      setLastError('Last Name must be longer than 2 characters');
    } else {
      setLastError('');
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailError('Email must be longer than 5 characters');
    } else {
      setEmailError('');
    }
  };
  const handlePassword = (e) => {
    setPass(e.target.value);
    if (e.target.value.length < 8) {
      setPassError('Password must be longer than 8 characters');
    } else {
      setPassError('');
    }
  };
  const handleConfirm = (e) => {
    setConfirm(e.target.value);
    if (e.target.value !== password) {
      setConfirmError("Passwords don't match");
    } else {
      setConfirmError('');
    }
  };

  return (
    <div>
      <div class='container w-50'>
        <form onSubmit={create}>
          {firstNameError ? (
            <p style={{ color: 'red' }}>{firstNameError}</p>
          ) : (
            ''
          )}
          <div class='form-floating mb-2 border'>
            <input
              onChange={handleFirst}
              class='form-control'
              type='text'
              id='fname'
              placeholder='First Name'
            />
            <label for='fname'>First Name</label>
          </div>
          {lastNameError ? (
            <p style={{ color: 'red' }}>{lastNameError}</p>
          ) : (
            ''
          )}
          <div class='form-floating mb-2'>
            <input
              onChange={handleLast}
              class='form-control'
              type='text'
              id='lname'
              placeholder='Last Name'
            />
            <label for='fname'>Last Name</label>
          </div>
          {emailError ? (
            <p style={{ color: 'red' }}>{emailError}</p>
          ) : (
            ''
          )}
          <div class='form-floating mb-2'>
            <input
              onChange={handleEmail}
              class='form-control'
              type='text'
              id='email'
              placeholder='Email'
            />
            <label for='fname'>Email</label>
          </div>
          {passwordError ? (
            <p style={{ color: 'red' }}>{passwordError}</p>
          ) : (
            ''
          )}
          <div class='form-floating mb-2'>
            <input
              onChange={handlePassword}
              class='form-control'
              type='password'
              id='pword'
              placeholder='Password'
            />
            <label for='pword'>Password</label>
          </div>
          {confirmPasswordError ? (
            <p style={{ color: 'red' }}>{confirmPasswordError}</p>
          ) : (
            ''
          )}
          <div class='form-floating'>
            <input
              onChange={handleConfirm}
              class='form-control'
              type='password'
              id='confirm'
              placeholder='Confirm Password'
            />
            <label for='pword'>Confirm Password</label>
          </div>
          <div class='border'>
            <button type='submit' value='create' class='btn btn-outline-success'>Submit</button>
          </div>
        </form>
        {didSubmit ? (
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
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default Form;
