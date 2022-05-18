import React, { useState, useEffect } from 'react';
import './App.css'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
import './index.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [one,setOne] = useState(false)
  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = async (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      <AuthContext.Provider 
     label="Subscribe"
         value={{
          isLoggedIn: isLoggedIn, 
          onLogout: logoutHandler,
          setOne:setOne,
         }} 
      > 
        <MainHeader /> 
      

        <main className={`${!one ? 'html' : 'item'}`}>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
          </main>

      
      </AuthContext.Provider>
    </React.Fragment>
     );
}
export default App;
