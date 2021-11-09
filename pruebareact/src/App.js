import Contacto from "./pages/Contacto";
import Index from "./pages/Index";

import styles from "./styles/styles.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import IndexAdmin from "./pages/admin/Index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element= {<Index/>} />
         <Route path = '/Contacto' element = {<Contacto/>}/>
         <Route path = '/admin' element={<IndexAdmin />} />
         <Route path = '/admin/usuarios' element={<Usuarios />} />
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
