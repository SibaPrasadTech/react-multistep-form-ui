import { useContext } from 'react';
import FormContext from '../context/FormContext';
import "../styles/FormArea.css";

const FormArea = ({ changeStep, data }) => {

  const { onboardingData, setOnboardingData } = useContext(FormContext);
  console.log(onboardingData);
  const onClickHandler = () => {
    changeStep((prevStep) => {
      return prevStep + 1
    })
  }

  const conditionalContent = () => {
    switch (data.stepType) {
      case "FormWithInputFeilds":
        return data.formFeilds.map((formFeild, id) => {
          return (
            <div className="inputWrapper" key={formFeild.id + id}>
              {formFeild.type === "text-input" ?
                <>
                  <label htmlFor={formFeild.id}>{formFeild.label}</label>
                  <input
                    id={formFeild.id}
                    type={formFeild.type}
                    placeholder={formFeild.info}
                    value={onboardingData[formFeild.id]}
                    onChange={(e) => { setOnboardingData((prev) => { return { ...prev, [formFeild.id]: e.target.value } }) }} />
                </> :
                <>
                  <label htmlFor={formFeild.id}>{formFeild.label}<span>(optional)</span></label>
                  <div className="specialInput">
                    <div>
                      {formFeild.additionalInfo}
                    </div>
                    <input
                      id={formFeild.id}
                      type={formFeild.type}
                      placeholder={formFeild.info}
                      value={onboardingData[formFeild.id]}
                      onChange={(e) => { setOnboardingData((prev) => { return { ...prev, [formFeild.id]: e.target.value } }) }} />
                  </div>
                </>}

            </div>)
        })
      case "FormWithSelectCards":
        return data.formFeilds.map((formFeild, id) => {
          return (
            <div
              // className='selectCardsWrapper completed'
              className={(onboardingData.withMyTeam && formFeild.id === "withMyTeam") || (!onboardingData.withMyTeam && formFeild.id !== "withMyTeam") ? 'selectCardsWrapper selected' : 'selectCardsWrapper'}
              key={formFeild.id + id}
              onClick={() => {
                setOnboardingData((prev) => {
                  let wMyTeam = formFeild.id === "withMyTeam" ? true : false;

                  return { ...prev, withMyTeam: wMyTeam }
                })
              }}>


              <div>
                <img src={formFeild.icon} alt={`icon`} />
                <div className="primary">{formFeild.info}</div>
                <div className="secondary">{formFeild.additionalInfo}</div>
              </div>
            </div>)
        })

      case "FormCompletion":
        return (
          <div className="successMessageWrapper">
            <div className="successIcon">
              <img src={data.icon} alt="icon" />
            </div>
            <div className='successMessage'>
              <div>{data.successMessagePrimary("Eden!")}</div>
              <div>{data.successMessageSecondary}</div>
            </div>
          </div>)
      default:
        return "Unknown Form field. Unable to render"
    }
  }
  return (
    <div className="FormArea">
      <div className={data.stepType}>
        {conditionalContent()}
      </div>
      <div className="ButtonSection">
        <button onClick={onClickHandler}>{data.button.text}</button>
      </div>
    </div>
  )
}

export default FormArea