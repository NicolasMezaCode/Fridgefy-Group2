import './App.css';
import AuthProvider from './AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Frontend/User/SignUp';
import SignIn from './Frontend/User/SignIn';
<<<<<<< HEAD
import Main from './Frontend/Components/Main';
import { GlobalStyles } from './Frontend/Components/Styles/GlobalStyles';
//import { StyledNavbar } from './Frontend/Components/Styles/Navbar.styles';
import { FetchRecipes } from './Backend/FetchRecipes';
import { LandingPage } from './Frontend/Components/LandingPage'
import ProtectRoute from './Frontend/User/ProtectRoute';
=======
import { LandingPage } from './Frontend/Components/LandingPage'
import ProtectRoute from './Frontend/User/ProtectRoute';
import { Navbar } from './Frontend/Components/NavBar';
>>>>>>> master

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <GlobalStyles />
      {/* <FetchRecipes /> */}
      <AuthProvider>
        <BrowserRouter>
        
        <nav className='navbar'>
          <Link to='/' className='fri'>Fridgefy</Link>
          <Link to='/recipes'>Recipes</Link>
          <Link to='/shoppinglist'>Shopping List</Link>
          <Link to='/signup' className='signup'>Sign up</Link>
          <Link to='/signin' className='signin'>Sign in</Link>
        </nav>
        
=======
      <AuthProvider>
        <BrowserRouter>
        <Navbar />
>>>>>>> master
          <Routes>
            <Route path='/signup' element={<ProtectRoute><SignUp /></ProtectRoute>}></Route>
            <Route path='/signin' element={<ProtectRoute><SignIn /></ProtectRoute>}></Route>
            <Route path='/' element={<LandingPage />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
