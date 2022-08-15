import React from 'react'

const FormInfo = ({ data }) => {
  return (
    <div className="FormInfoArea">
      <div className="FormPrimaryInfo">{data.FormInfoArea.FormPrimaryInfo}</div>
      <div className="FormSecondaryInfo">{data.FormInfoArea.FormSecondaryInfo}</div>
    </div>
  )
}

export default FormInfo