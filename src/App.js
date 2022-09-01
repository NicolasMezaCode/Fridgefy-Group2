import './App.css';
import AuthProvider from './AuthContext';
// import { FetchRecipes } from './Backend/FetchRecipes'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SignUp from './Frontend/User/SignUp';
import SignIn from './Frontend/User/SignIn';
import Main from './Frontend/Components/Main';
import { FetchRecipes } from './Backend/FetchRecipes';
import { LandingPage } from './Frontend/Components/LandingPage'
import ProtectRoute from './Frontend/User/ProtectRoute';

function App() {
  return (
    <div className="App">
      {/* <FetchRecipes /> */}
      <AuthProvider>
        <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/signup'>Sign up</Link>
          <Link to='/signin'>Sign in</Link>
          <Link to='/recipes'>My recipes</Link>
          <Link to='/shoppinglist'>My Shopping List</Link>
        </nav>
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
