import React, { Component } from 'react'
import '../stylesheet/RegistrationForm.css'
import { isEmailValid, isUrlValid } from '../utilities/Helper'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.isInputsValid = true
    this.state = {
      loginId: this.getValueErrorObject(),
      email: this.getValueErrorObject(),
      name:this.getValueErrorObject(),
      url: this.getValueErrorObject(),
      timezone: this.getValueErrorObject(),
      aboutMe:this.getValueErrorObject(),
      receiveNotification: false,
      showCheckboxError: false,
    }
  }
  getValueErrorObject(field) {
    return {
      value:'', 
      error:''};
  }
  setStatesFor(field, value, error) {
    this.setState({
      [field] : {
        value: value,
        error: error
      }
    })
  }
  handleFormSubmission = (e) => {
    this.isInputsValid = true
    this.checkLogin()
    this.checkEmail()
    this.checkName()
    this.checkUrl()
    this.checkAboutMe()
    this.setState({
      showCheckboxError: !this.state.receiveNotification
    })
    this.isInputsValid = this.state.receiveNotification
    if (!this.isInputsValid) {
      e.preventDefault()
    }
    
  }
  checkLogin = () => {
    if (this.state.loginId.value.trim().length == 0) {
      this.setStatesFor('loginId', '', 'Login field is empty.')
      this.isInputsValid = false
    } 
  }
  checkEmail = () => {
    if (this.state.email.value.trim().length == 0) {
      this.setStatesFor('email', this.state.email.value, 'Email field is empty.')
      this.isInputsValid = false
    } else if (!isEmailValid(this.state.email.value)) {
      this.setStatesFor('email', this.state.email.value, 'Email is invalid.')
      this.isInputsValid = false
    }
  }
  checkName = () => {
    if (this.state.name.value.trim().length == 0) {
      this.setStatesFor('name', '', 'Username field is empty.')
      this.isInputsValid = false
    } 
  }
  checkUrl = () => {
    if (this.state.url.value.trim().length == 0) {
      this.setStatesFor('url', this.state.url.value, 'Url field is empty.')
      this.isInputsValid = false
    } else if (!isUrlValid(this.state.url.value)) {
      this.setStatesFor('url', this.state.url.value, 'Url is invalid.')
      this.isInputsValid = false
    }
  }
  checkAboutMe = () => {
    const aboutMeLength = this.state.aboutMe.value.trim().length
    if(aboutMeLength < 50) {
      this.setStatesFor('aboutMe', this.state.aboutMe.value, (aboutMeLength == 0) ? 'About me is empty.' : 'About me is less than 50 characters.')
      this.isInputsValid = false
    }
  }
  loginIdHandler = (e) => {
    this.setStatesFor('loginId', e.target.value, '')
  }
  emailHandler = (e) => {
    this.setStatesFor('email', e.target.value, '')
  }
  nameHandler = (e) => {
    this.setStatesFor('name', e.target.value, '')
  }
  urlHandler = (e) => {
    this.setStatesFor('url', e.target.value, '')
  }
  timezoneHandler = (e) => {
    this.setStatesFor('timezone', e.target.value, '')
  }
  aboutMeHandler = (e) => {
    this.setStatesFor('aboutMe', e.target.value, '')
  }
  receiveNotificationCheckBox = (e) => {
    this.setState({
      receiveNotification: e.target.checked,
      showCheckboxError: false
    })
  }
  render() {
    return (
      <div className='MainContainer'>
        <div className='HeaderContainer'>
          <h2 >Registration Form</h2>
        </div>
        <form align='left' onSubmit={this.handleFormSubmission} name='registrationForm'>
          <label className='LabelSetup'>LoginId</label>
          <input className='InputWhite' 
            type='text' 
            value={this.state.loginId.value}
            onChange={this.loginIdHandler}>
          </input><br></br>
          {(this.state.loginId.error.length != 0) && <div className='ErrorLogin'>{this.state.loginId.error}</div>}
          <label className="LabelSetup">Email</label>
          <input className="InputYellowEmail" 
            type="text" 
            value={this.state.email.value}
            onChange={this.emailHandler}>
          </input><br></br>
          {(this.state.email.error.length != 0) && <div className='ErrorLogin'>{this.state.email.error}</div>}
          <label className="LabelSetup">Name</label>
          <input className="InputYellowName" 
            type="text" 
            value={this.state.name.value}
            onChange={this.nameHandler}>
          </input><br></br>
          {(this.state.name.error.length != 0) && <div className='ErrorLogin'>{this.state.name.error}</div>}
          <label className="LabelSetup">Timezone</label>
          <select id="timezone" className='SelectOption' onChange={this.timezoneHandler}>
            <option value="gmt" selected>GMT</option>
            <option value="pst">PST</option>
            <option value="ist">IST</option>
          </select><br></br>
          {(this.state.timezone.error.length != 0) && <div className='ErrorLogin'>{this.state.timezone.error}</div>}
          <label className="LabelSetup">Home Page</label>
          <input className="InputWhiteUrl" 
            type="text" 
            value={this.state.url.value}
            onChange={this.urlHandler}>
          </input><br></br>
          {(this.state.url.error.length != 0) && <div className='ErrorLogin'>{this.state.url.error}</div>}
          <label className="AboutlabelSetup">About Me</label><br></br>
          <textarea className="TextAreaSetup" 
            type="text" 
            minLength={50} 
            value={this.state.aboutMe.value}
            onChange={this.aboutMeHandler}>
          </textarea><br></br>
          {(this.state.aboutMe.error.length != 0) && <div className='ErrorAboutMe'>{this.state.aboutMe.error}</div>}
          <input className="LabelSetup" 
            type="checkbox" 
            onChange={this.receiveNotificationCheckBox}></input>
          <label className="LabelSetupCheckBox">
            Receive notification of comment.
          </label><br></br>
          {(this.state.showCheckboxError) && <div className='ErrorAboutMe'>Please select checkbox for notification</div>}
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
