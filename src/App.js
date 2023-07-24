// App.js (or your main component)
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import{Home,Navbar,About,Contact,Charges} from './components'
const App=()=> {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/charges" element={<Charges />} />
          <Route path='/join' element={<Contact/>}/>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
