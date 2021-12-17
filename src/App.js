import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './User/Pages/Home'
import { WriteEditorial } from './Editorial/Pages/WriteEditorial'
import { Navbar } from './Navigation/Navbar'
import { EditorialList } from './Editorial/Pages/EditorialList';
import { Editorial } from './Editorial/Pages/Editorial'
import { PageNotFound } from './User/Pages/PageNotFound';
import { Login } from './User/components/Login'
import { SignUp } from './User/components/SignUp'
import { ForgotPassword } from './User/components/ForgotPassword';
import { AuthContextProvider } from './Shared/context/auth-context'




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
          <Route path='/editorial/:id' element={<Editorial />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </AuthContextProvider>

  );
}

export default App;


