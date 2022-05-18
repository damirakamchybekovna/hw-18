// import React from "react";
// //кандайдыр бир обьек сактап берет,( баардык состояниелерибизди сактап берет)
// const AuthContext = React.createContext({
//     isLoggedIn: false,//баштапкы функция деп койсок болот
//     onLogout:() => {},
// });
// export default AuthContext;


import React from 'react';
import "./auth-context.css"


  
const AuthContext = React.createContext({
  isLoggedIn: true,
  onLogout: () => {},
  setOne:false,
});

export default AuthContext;