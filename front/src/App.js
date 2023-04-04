import axios from "axios";
import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useEffect, useState } from 'react';
import {Route, Routes,useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/detail/detail';
import Form from './components/Form/Form';

function App () {

  // Hooks
  const [characters,setCharacters] = useState([]);
  const {pathname} = useLocation();
const [access,setAccess] = useState(false);
const navigate = useNavigate();

useEffect(()=>{
  !access && navigate("/");
  
}, [access])
// fakeCredentials
const username = "domirandar@unal.edu.co";
const password = "Password93";

  // Handlers
  const onSearch = (id) =>{
 /*    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "64ca84b60b66.7d4133ef550826b67559"; */
    const URL_BASE = 'http://localhost:3001'
if (characters.find((char)=> char.id === id )){
  return alert('El personaje ya se mostró.')
}

   // fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)


  axios.get(`${URL_BASE}/onsearch/${id}`)
    .then((response) => {
      const data = response.data;
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("Algo salió mal");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Algo salió mal");
    });
  
};

  const onClose = (id) => {
    setCharacters(characters.filter((char)=>char.id !== id))
  };
  // Login function
  const login = (userData) => {
    if (userData.username === username && userData.password===password){
      setAccess(true);
      navigate("/home");
  } else {
    alert("Usuario o contraseña invalidos"); 
  };

  };
  // Render
  return (
    <div className={style.App} style={{ padding: "25px" }}>
      {pathname === "/" ? null : <Nav onSearch={onSearch} />}
      <Routes>
        <Route
         path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
