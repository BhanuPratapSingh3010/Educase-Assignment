import React from 'react'
import WelcomePage from './pages/WelcomePage'
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
import AccountSetting from './pages/AccountSetting'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account-setting" element={<AccountSetting />} />
      </Routes>
    </Router>
  )
}

export default App