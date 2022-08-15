import React from 'react'
import { useContext } from 'react';
import FormContext from '../context/FormContext';
const ErrorMessage = () => {
  const { onboardingData, setOnboardingData } = useContext(FormContext);
  const message = onboardingData.validationMessage !== "" ? <div className="ErrorMessage">{onboardingData.validationErrorMessage}</div> : null;
  return message;
}

export default ErrorMessage