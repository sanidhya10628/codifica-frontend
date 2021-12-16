import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './User/Pages/Home'
import { WriteEditorial } from './Editorial/Pages/WriteEditorial'
import { Navbar } from './Navigation/Navbar'
import { EditorialList } from './Editorial/Pages/EditorialList';
import { Editorial } from './Editorial/Pages/Editorial'

import { Login } from './User/components/Login'
import { SignUp } from './User/components/SignUp'

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
          <Route path='/writeEditorial' element={<WriteEditorial />} />
          <Route path='/editorials' element={<EditorialList />} />
          <Route path='/editorial/:id' element={<Editorial />} />
        </Routes>
      </Router>
    </AuthContextProvider>

    // <Router>
    //   {/* <Toolbar /> */}
    //   <SideDrawer />
    //   <BackDrop />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/login' element={<Login />} />
    //   </Routes>
    // </Router>
  );
}

export default App;


