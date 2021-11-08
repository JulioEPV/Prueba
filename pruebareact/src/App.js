import Contacto from "./pages/Contacto";
import Index from "./pages/Index";

import styles from "./styles/styles.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element= {<Index/>} />
         <Route path = '/Contacto' element = {<Contacto/>}/>
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
