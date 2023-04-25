import logo from './logo.svg';
import axios from "axios"
import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [token, setToken] = useState("")
  const endpointAPI = process.env.REACT_APP_API_ENDPOINT

  useEffect(() => {
    console.log("coouc")
  },[])

  const handleGet = async () => {
    console.log("get")
    console.log({ endpointAPI })
    fetch(endpointAPI)
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(data => console.log(data))
    .catch(e=>console.log({e}))
  }
  async function handleRegister() {
    const response = await axios.post(`${endpointAPI}/register`, {
      email: "user@example.com",
      password: "secret",
    })
    console.log("inscription")
    setToken(response.data.token)
  }

  async function handleLogin() {
    const response = await axios.post(`${endpointAPI}/login`, {
      email: "user@example.com",
      password: "secret",
    })
    console.log("connexion")
    setToken(response.data.token)
  }

  async function handleProfile() {
    const response = await axios.get(`${endpointAPI}/api/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log("profile")
    console.log(response.data)
  }

  async function handleUpdateProfile() {
    const response = await axios.put(
      `${endpointAPI}/api/profile`,
      {
        name: "John Doe",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log("update profile")
    console.log(response.data)
  }

  return (
    <div>
      <button onClick={handleGet}>Get</button>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleProfile}>Get Profile</button>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  )
}

export default App