import React, { Component } from 'react'
import '../Stylesheet/RegistrationForm.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.isInputsValid = true
    this.checkboxCliked = false
    this.state = {
      loginId: {
        value:'',
        error:''
      },
      email: {
        value:'',
        error:''
      },
      name: {
        value:'',
        error:''
      },
      url: {
        value:'',
        error:''
      },
      timezone: {
        value:'SelectTimezone',
        error:''
      },
      aboutMe: {
        value:'',
        error:''
      },
      receiveNotification: true
    }
  }
  handleFormSubmission = (e) => {
    console.log('On submit called')
    this.checkLogin()
    this.checkEmail()
    this.checkName()
    this.checkTimeZone()
    this.checkUrl()
    this.checkAboutMe()
   /* if (!this.checkboxCliked) {
      this.setState({
        receiveNotification: false
      })
    }
    this.isInputsValid = this.state.receiveNotification */
    if (!this.isInputsValid) {
      e.preventDefault()
    }
    
  }
  checkLogin = () => {
    if (this.state.loginId.value.trim().length == 0) {
      this.setState({
        loginId: {
          value: '',
          error: 'Login field is empty.'
        }
      })
      this.isInputsValid = false
    } 
  }
  checkEmail = () => {
    
  }
  checkName = () => {
    if (this.state.name.value.trim().length == 0) {
      this.setState({
        name: {
          value: '',
          error: 'Username field is empty.'
        }
      })
      this.isInputsValid = false
    } 
  }
  checkTimeZone = () => {
    if (this.state.timezone.value == 'SelectTimezone') {
      this.setState({
        timezone: {
          value: this.state.timezone.value,
          error: 'Please select a timezone.'
        }
      })
      this.isInputsValid = false
    }
  }
  checkUrl = () => {
    
  }
  checkAboutMe = () => {
    const aboutMeLength = this.state.aboutMe.value.trim().length
    if(aboutMeLength < 50) {
      this.setState({
        aboutMe: {
          value: this.state.aboutMe.value,
          error: (aboutMeLength == 0) ? 'About me is empty.' : 'About me is less than 50 characters.'
        }
      })
      this.isInputsValid = false
    }
  }
  loginIdHandler = (e) => {
    this.setState({
      loginId: {
        value: e.target.value,
        error: ''
      }
    })
  }
  emailHandler = (e) => {
    this.setState({
      email: {
        value: e.target.value,
        error: ''
      }
    })
  }
  nameHandler = (e) => {
    this.setState({
      name: {
        value: e.target.value,
        error: ''
      }
    })
  }
  urlHandler = (e) => {
    this.setState({
      url: {
        value: e.target.value,
        error: ''
      }
    })
  }
  timezoneHandler = (e) => {
    console.log(e.target.value)
    this.setState({
      timezone: {
        value: e.target.value,
        error: ''
      }
    })
  }
  aboutMeHandler = (e) => {
    this.setState({
      aboutMe: {
        value: e.target.value,
        error: ''
      }
    })
  }
  receiveNotificationCheckBox = (e) => {
    this.checkboxCliked = true
    this.setState({
      receiveNotification: e.target.checked
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
            type="email" 
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
          <select id="timezone" className='SelectOption' defaultValue={this.state.timezone.value} onChange={this.timezoneHandler}>
            <option value="SelectTimezone">Select a timezone</option>
            <option value="gmt">GMT</option>
            <option value="pst">PST</option>
            <option value="ist">IST</option>
          </select><br></br>
          {(this.state.timezone.error.length != 0) && <div className='ErrorLogin'>{this.state.timezone.error}</div>}
          <label className="LabelSetup">Home Page</label>
          <input className="InputWhiteUrl" 
            type="url" 
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
          {(!this.state.receiveNotification) && <div className='ErrorAboutMe'>Please select checkbox for notification</div>}
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