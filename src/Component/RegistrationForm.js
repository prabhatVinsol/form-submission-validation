import React, { Component } from 'react'
import '../Stylesheet/RegistrationForm.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  handleFormSubmission = (e) => {
    console.log('On submit called')
    e.preventDefault()
  }
  render() {
    return (
      <div className='MainContainer'>
        <div className='HeaderContainer'>
          <h2 >Registration Form</h2>
        </div>
        <form align='left' onSubmit={this.handleFormSubmission}>
          <label className='LabelSetup'>LoginId</label>
          <input className='InputWhite' 
            type='text' 
            id='login' 
            name='login'>
          </input><br></br>
          <label className="LabelSetup">Email</label>
          <input className="InputYellowEmail" 
            type="email" 
            id="email" 
            name="email">
          </input><br></br>
          <label className="LabelSetup">Name</label>
          <input className="InputYellowName" 
            type="text" 
            id="username" 
            name="username">
          </input><br></br>
          <label className="LabelSetup">Timezone</label>
          <select id="timezone" className='SelectOption'>
            <option value="SelectTimezone" defaultValue>Select a timezone</option>
            <option value="gmt">GMT</option>
            <option value="pst">PST</option>
            <option value="ist">IST</option>
          </select><br></br>
          <label className="LabelSetup">Home Page</label>
          <input className="InputWhiteUrl" 
            type="url" 
            id="homepage" 
            name="homepage">
          </input><br></br>
          <label className="AboutlabelSetup">About Me</label><br></br>
          <textarea className="TextAreaSetup" 
            type="text" 
            minLength={50} 
            id="aboutme" 
            name="aboutme">
          </textarea><br></br>
          <input className="LabelSetup" 
            type="checkbox" 
            id="commentcheckbox" 
            name="commentcheckbox"></input>
          <label className="LabelSetupCheckBox">
            Receive notification of comment.
          </label><br></br>
          <label className="LabelSetupText">
            You will be sent an email when someone posts comments to your blog or Album.
          </label><br></br>
          <div align="center" className='BottomDiv'>
            <label className="LabelSetupWithMargin" >
              Your password will be mailed to you.
            </label><br></br>
            <input type='submit' 
              className="SubmitButton" 
              value="Go">
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default RegistrationForm