import Joi from 'joi';
import { useState } from 'react';

const emailSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required();

const checkEmail = email => emailSchema.validate(email);

export default function useEmailValidation({ onFieldChange }) {
  const [emailError, setEmailError] = useState(null);

  function handleEmailChange(e) {
    const currentEmailValue = e.target.value;

    const emailValidation = checkEmail(currentEmailValue);

    onFieldChange(currentEmailValue);
    setEmailError(emailValidation.error);
  }

  return {
    handleEmailChange,
    emailError
  };
}
