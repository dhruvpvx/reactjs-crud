import React from 'react'

const InputForm = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted form">
        <div className="two fields">
          <div className="field">
            <label>Name</label>
            <input placeholder="Name" type="text" />
          </div>
          <div className="field">
            <label>Email</label>
            <input placeholder="Email" type="text" />
          </div>
        </div>
        <div className="field">
          <label>Select Gender</label>
          <select>
            <option value="">Gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>
        <div className="inline field">
          <div className="ui checkbox">
            <input type="checkbox" tabindex="0" className="hidden" />
            <label>Status</label>
          </div>
        </div>
        <div className="ui submit button">Submit</div>
      </div>
    </div>
  )
}

export default InputForm