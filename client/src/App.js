import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/home' element={<Home />} />
        
        </Routes>
      </div>
  
  );
}

export default App;
