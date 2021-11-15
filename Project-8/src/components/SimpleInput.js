import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid = enteredEmail.trim().includes('@');
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }


  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailIsTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    console.log(enteredName);
    console.log(enteredEmail);

    if (!enteredNameIsValid) {
      return;
    }
    if(!enteredEmailIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  };



  const nameInputClasses = nameInputIsInValid ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputIsInValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInValid && <p className="error-text">*Name Should Not Be Empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInValid && <p className="error-text">*Email Should Not Be Empty and should contain '@'</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;