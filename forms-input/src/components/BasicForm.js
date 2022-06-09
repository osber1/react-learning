import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const isNotEmpty = (value) => value.trim() !== "";
  const isEmailValid = (value) => value.match(validEmailRegex);

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: enteredSurname,
    isValid: surnameIsValid,
    hasError: surnameHasError,
    valueChangeHandler: surnameChangedHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: resetSurname,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmailValid);

  let formIsValid = false;

  if (nameIsValid && surnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetName();
    resetSurname();
    resetEmail();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const surnameInputClasses = surnameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangedHandler}
          />
          {nameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor="surname">Last Name</label>
          <input
            type="text"
            id="surname"
            value={enteredSurname}
            onBlur={surnameBlurHandler}
            onChange={surnameChangedHandler}
          />{" "}
          {surnameHasError && (
            <p className="error-text">Surname must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
        />
        {emailHasError && (
          <p className="error-text">Email must be valid and not empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
