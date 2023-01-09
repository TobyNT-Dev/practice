import React, { useState } from 'react'
import { useLoginStore } from './useLoginStore'
import './Login.css'

export const Login = () => {
    const {loggedIn, setLoggedIn} = useLoginStore()
    const initialState = {
        username: "",
        password: ""
    }
    const [user, setUser] = useState(initialState)

    const handleSubmit = event => {
        event.preventDefault()
        
        // Validate the username and password
            const endPoint = "https://api.mediehuset.net/token";
            const username = user.username
            const password = user.password
            const data = {username, password};
            fetch(endPoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.access_token) {
                  data.user.user_id = data.user_id
                  setLoggedIn(true, data.user, data.username, data.access_token);
                //   console.log(data)
                  setUser(initialState)
                  alert(`Welcome ${data.username}!`);
                } else {
                  alert("Ingen brugere med disse kriterier");
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
    }
    
      // Function to handle changes to the username
      const handleChange = event => {
        const {value, name} = event.target
        setUser({
            ...user,
            [name]: value
        })
      }
      return (
        <>
    {!loggedIn ? <div className="login-box">
            <form onSubmit={handleSubmit}>
        <label>
        Username:
            <input type="text" name="username" onChange={ (event) => {handleChange(event)}} />
        </label>
        <br />
        <label>
        Password:
            <input type="password" name="password" onChange={ (event) => {handleChange(event)}} />
        </label>
        <br />
        <button type="submit">Log In</button>
        </form>
    </div> : <><button onClick={() => setLoggedIn(false, "", "", "",)}>Log Out</button></>}
        </>
)
}