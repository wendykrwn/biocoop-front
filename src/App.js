import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import HomePage from "./pages/homePage"
import CashierRegister from "./pages/cashierRegister"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/inscription-caissier" Component={CashierRegister} />
        <Route path="*" Component={()=><h1>404 page not found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
