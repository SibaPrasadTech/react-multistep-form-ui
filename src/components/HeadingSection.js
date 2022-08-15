import React from 'react'

const HeadingSection = () => {
  return (
    <div className="HeadingSection">
      <img className="Logo" src={process.env.PUBLIC_URL + "/logo.png"} alt="LOGO" />
      <span className="CompanyText">Cutshort</span>
    </div>
  )
}

export default HeadingSection