import Contacto from "./pages/Contacto";
import Index from "./pages/Index";
import IndexAdmin from "./pages/admin/Index";
import Usuarios from "./pages/admin/Usuarios";

import styles from "./styles/styles.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LayoutAdmin from "./layout/LayoutAdmin";
import { UserContext } from "./context/user";
import React, {useState} from "react";



function App() {
    const[userData, setUserData] = useState({nombre:'Julio'});
  return (
    <UserContext.Provider value={{userData,setUserData}}>
      <BrowserRouter>
      <Routes>
         <Route path='/' element= {<Index/>} />
         <Route path = '/Contacto' element = {<Contacto/>}/>
         <Route path ='/admin' element={<LayoutAdmin/>}>
         <Route path = '' element={<IndexAdmin />} />
         <Route path = 'usuarios' element={<Usuarios />} />
         </Route>
      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
