import React from 'react'

const Input = ({text}) => {
  return (
    <div>
      <div className="textbox">
            <input type="text" id="result" value={text} readOnly />
          </div>
    </div>
  )
}

export default Input
