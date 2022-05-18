import React from 'react';
import AuthContext from '../../store/auth-context';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import { useContext } from 'react';

const MainHeader = (props) => {
  const context = useContext(AuthContext)
  return (

    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
    
     
      <Navigation  onLogout={props.onLogout} />
      <input type={"checkbox"} onClick={() => context.setOne((prev)=> !prev ) } />
    </header>
  );
};


export default MainHeader;
