import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { User } from './User/Pages/User'
import { WriteEditorial } from './Editorial/Pages/WriteEditorial'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/writeEditorial' element={<WriteEditorial />} />
      </Routes>
    </Router>
  );
}

export default App;
