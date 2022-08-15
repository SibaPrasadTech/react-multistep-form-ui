import React from 'react'
import '../styles/step.css';
const ProgressBar = ({ changeStep, currStep, totalSteps }) => {
  const arr = [...Array(totalSteps).keys()].map(i => i + 1);
  // console.log(arr);
  const onClickHandler = (index) => {
    if (index < currStep) {
      changeStep(index);
    }
  }
  return (
    <div className="ProgressbarSection">
      <div className="stepper-wrapper">
        {arr.map((ele, index) => {
          return (
            <div className={index < currStep + 1 ? "stepper-item completed" : "stepper-item"} key={index} onClick={() => { onClickHandler(index) }}>
              <div className="step-counter">{index + 1}</div>
            </div>)
        })}

      </div>
    </div>
  )
}

export default ProgressBar