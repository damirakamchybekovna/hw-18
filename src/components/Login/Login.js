import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { useReducer } from 'react';

const emailReducer = (prevState, action) => {
  if(action.type === 'USER_INPUT') {
    return {
      value: action.emailValue, 
      isValid: action.emailValue.includes('@')
    }
  }
  if(action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@')
    };
  }

  return {
    value: '',
    isValid: false,
  }
}

const passwordReducer = (prevState, action) => {
  if(action.type === 'USER_INPUT') {
    return {
      value: action.passwordValue, 
      isValid: action.passwordValue.trim().length > 6
    }
  }
  if(action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 6
    };
  }

  return {
    value: '',
    isValid: false,
  }
}

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    isValid: undefined,
    value: ''
  })
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    isValid : undefined,
    value: ''
  })

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //debouncing, debounce

  useEffect(() => {

    const timer = setTimeout(() => {
      setFormIsValid(emailState.value.includes('@') && 
      passwordState.value.trim().length > 6);
    }, 500)

    //clean up function
    return () => {
      clearTimeout(timer)
    }
    
  }, [emailState.value, passwordState.value])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', emailValue: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    dispatchPassword({type: 'USER_INPUT', passwordValue: event.target.value})
  };

   const validateEmailHandler = () => {
     dispatchEmail({type: 'INPUT_BLUR' })
   };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin( passwordState);
  };

  return (
    <Card className={classes.login}>
      <form  onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
