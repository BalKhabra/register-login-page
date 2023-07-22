import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
         
            // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
          e.preventDefault();
          if ( email === '' || password === '') {
               setError(true);
            } else {
                setSubmitted(true);
                setError(false);
            }
            return navigate('/home')
            };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>Log in successful</h1>
            </div>
        );
    };
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div style={{ display: error ? '' : 'none', }} >
                    <h1>Please enter all the fields</h1>
                </div>
            );
        };

    return (
        
        <div>
            <h2>Login</h2>
            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email</label>
                <input onChange={handleEmail} className="input" value={email} type="email" placeholder="youremail@email.com" id="email" name="email" />

            <label htmlFor="password">Password</label>
                <input onChange={handlePassword} className="input" value={password} type="password" placeholder="********" id="password" name="password" />
                <button onClick={handleSubmit} type="submit">Log In</button>
            </form>
            <button  onClick={() => navigate('/register')}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login; // Export the component as the default export
