import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { selectUser, setUser } from "./slices/userSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from "axios";
import Cookies from 'js-cookie'

function App() {
  const [hasUser, setHasUser] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    // Retrieve user information using cookie and display it on Home page
    const authJwt = Cookies.get('jwt')
    console.log(`AuthJwt is ${authJwt}`)
    if (authJwt) {
      // use jwt token to retrieve some user information
      const serverUrl = "http://localhost:8000"
      axios.get(`${serverUrl}/api/users/current`, {
        headers: {
          "Authorization": `Token ${authJwt}`,
          "Content-Type": "application/json",
        }
      }).then(res => {
        console.log(res.data)
        setUser(res.data.user)
      }).catch(err => {
        console.log(err)
      })

      if (user.email && user.email !== "") {
        setHasUser(true)
      }
    }

    console.log(user)
  }, [])
  
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
			</div>
  );
}

export default App;
