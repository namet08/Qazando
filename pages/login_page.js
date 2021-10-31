const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    passwd: '~senha'
  },

  buttons: {
    enter: '~entrar'
  },

  messages: {
    loginError: '~lognFail'
  },

  doLogin(email, passwd) {
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.passwd, passwd)
    I.tap(this.buttons.enter)
  },

  checkLoginError() {
    I.waitForElement(this.messages.loginError, 5)
    I.seeElement(this.messages.loginError)
  }
}
