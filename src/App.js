import React from 'react';

// Import CSS
import './App.css';

// Import React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import Components
import { Home } from './User/Pages/Home'
import { Navbar } from './Navigation/Navbar'
import { Login } from './User/components/Login'
import { SignUp } from './User/components/SignUp'
import { ForgotPassword } from './User/components/ForgotPassword';
import { ResetPassword } from './User/components/ResetPassword';
import { WriteEditorial } from './Editorial/Pages/WriteEditorial'
import { EditorialList } from './Editorial/Pages/EditorialList';
import { Editorial } from './Editorial/Pages/Editorial'
import { AuthContextProvider } from './Shared/context/auth-context'
import { PageNotFound } from './User/Pages/PageNotFound';
import { MyEditorials } from './Editorial/Pages/MyEditorials'

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/writeEditorial' element={<WriteEditorial />} />
          <Route path='/editorials' element={<EditorialList />} />
          <Route path='/myeditorials' element={<MyEditorials />} />
          <Route path='/editorial/:id' element={<Editorial />} />
          <Route path='reset-password/:id/:token' element={<ResetPassword />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </AuthContextProvider>

  );
}

export default App;


