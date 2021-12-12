import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { User } from './User/Pages/User'
import { WriteEditorial } from './Editorial/Pages/WriteEditorial'
import { Navbar } from './Navigation/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/writeEditorial' element={<WriteEditorial />} />
      </Routes>
    </Router>
  );
}

export default App;
