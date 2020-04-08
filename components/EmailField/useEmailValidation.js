import Joi from 'joi';
import { useState } from 'react';
import withDebounce from 'utils/withDebounce';

const emailSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required();

const checkEmail = (email) => emailSchema.validate(email);

export default function useEmailValidation({ onFieldChange }) {
  const [emailError, setEmailError] = useState(null);

  function handleEmailChange(e) {
    e.persist();
    e.preventDefault();
    const email = e.target.value;
    onFieldChange(email);
    const emailValidation = checkEmail(email);
    setEmailError(emailValidation.error);
  }

  return {
    handleEmailChange,
    emailError
  };
}
