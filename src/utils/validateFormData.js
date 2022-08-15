// import { useContext } from 'react';
// import FormContext from '../context/FormContext';

const workspaceURLregex = /[^a-zA-Z0-9]/;

const validateFormData = (step, onboardingData, setOnboardingData) => {
  switch (step) {
    case 1:
      if (onboardingData.fullname.length < 8) {
        setOnboardingData({ ...onboardingData, validationErrorMessage: "Full Name should have atleast 8 Characters", validationStatus: false });
        return false;
      }
      else if (onboardingData.displayname.length < 3) {
        setOnboardingData({ ...onboardingData, validationErrorMessage: "Display Name should have atleast 5 Characters", validationStatus: false })
        return false;
      }
      else {
        setOnboardingData({ ...onboardingData, validationErrorMessage: "", validationStatus: true })
        return true
      }
    case 2:
      if (onboardingData.workspaceName.length === 0 || onboardingData.workspaceURL.length === 0) {
        setOnboardingData({ ...onboardingData, validationErrorMessage: "Inputs are empty.", validationStatus: false });
        return false;
      }
      else if (onboardingData.workspaceName.length < 8) {
        setOnboardingData({ ...onboardingData, validationErrorMessage: "Workspace Name should have atleast 8 Characters", validationStatus: false });
        return false;
      }
      else if (workspaceURLregex.test(onboardingData.workspaceURL)) {
        setOnboardingData({ ...onboardingData, validationErrorMessage: "Workspace URL should not have any special characters.", validationStatus: false })
        return false;
      }
      else {
        setOnboardingData({ ...onboardingData, validationErrorMessage: "", validationStatus: true })
        return true
      }
    default:
      return true

  }
}

export default validateFormData;