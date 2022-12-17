import useValidate from "../../hooks/use-validate";

import classes from "./Checkout.module.css";

function Checkout({ onCancel }) {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: nameResetInput,
  } = useValidate();
  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    resetInput: streetResetInput,
  } = useValidate();
  const {
    value: postalValue,
    isValid: postalIsValid,
    hasError: postalHasError,
    inputChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    resetInput: postalResetInput,
  } = useValidate(true);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    resetInput: cityResetInput,
  } = useValidate();

  const formIsValid =
    nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;
    nameResetInput();
    streetResetInput();
    postalResetInput();
    cityResetInput();
  };

  const nameControlClasses = `${classes.control} ${
    nameHasError && classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    streetHasError && classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    postalHasError && classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    cityHasError && classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={classes["error-text"]}>name 공백입니다.</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && (
          <p className={classes["error-text"]}>street 공백입니다.</p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalValue}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
        {postalHasError && (
          <p className={classes["error-text"]}>postalCode는 5글자 입니다.</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && (
          <p className={classes["error-text"]}>city 공백입니다.</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          className={classes.submit}
          disabled={formIsValid ? false : true}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
