import React, { useState } from "react"
import axios from "axios"

// Créer un compte caissier
const CashierRegister = () => {
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [storeId, setStoreId] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({lastName , firstName , email , password , storeId})
    console.log("Bool : ",lastName && firstName && email && password && storeId)
    if(lastName && firstName && email && password && storeId){
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}/stores/${storeId}/cashiers`,
          {
            last_name: lastName,
            first_name: firstName,
            email,
            password,
          }
        )
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <h2>Inscription Caissier</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Id Magasin:
          <input
            type="number"
            value={storeId}
            name="storeId"
            autocomplete="my-form-name-input-id-store"
            onChange={(e) => setStoreId(e.target.value)}
          />
        </label>

        <label>
          Nom:
          <input
            type="text"
            value={lastName}
            name="last_name"
            autocomplete="my-form-name-input-name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Prénom:
          <input
            type="text"
            value={firstName}
            name="first_name"
            autocomplete="my-form-name-input-email"
            placeholder="entrer votre adresse email"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            name="email"
            autocomplete="my-form-name-input-email"
            placeholder="entrer votre adresse email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            name="password"
            autocomplete="my-form-name-input-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default CashierRegister
