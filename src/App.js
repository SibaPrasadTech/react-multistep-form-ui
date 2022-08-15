import HeadingSection from './components/HeadingSection';
import ProgressBar from './components/ProgressBar';
import { useState } from 'react';
import formData from './ConfigFormData';
import FormInfo from './components/FormInfo';
import FormArea from './components/FormArea';
import './styles/App.css';
import './fonts/Inter-Regular.ttf';
import FormContext from './context/FormContext';

const InitialValues = {
  fullname: "",
  displayname: "",
  workspaceName: "",
  workspaceURL: "",
  withMyTeam: false
}

function App() {
  const [index, setIndex] = useState(0);
  const [onboardingData, setOnboardingData] = useState(InitialValues);
  if (index > formData.length - 1) {
    setIndex(0);
    return alert("Form submitted with : ", formData);
  }
  // else if (index === formData.length - 1) {
  //   return (<div className="Container">
  //     <FormContext.Provider value={{ onboardingData, setOnboardingData }}>
  //       <HeadingSection />
  //       <ProgressBar changeStep={setIndex} currStep={index} totalSteps={formData.length} />
  //       <FormArea changeStep={setIndex} data={formData[index]} />
  //     </FormContext.Provider>
  //   </div>)
  //} 
  else {
    return (
      <div className="Container">
        <FormContext.Provider value={{ onboardingData, setOnboardingData }}>
          <HeadingSection />
          <ProgressBar changeStep={setIndex} currStep={index} totalSteps={formData.length} />
          {formData[index].FormInfoArea && <FormInfo data={formData[index]} />}
          <FormArea changeStep={setIndex} data={formData[index]} />
        </FormContext.Provider>
      </div>
    );
  }
}

export default App;
