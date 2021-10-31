Feature('Students');

const home_page = require("../pages/home_page");
const code = require('../Utils/code')
const name = require('../Utils/name')


const { I, login_page } = inject()

Scenario('Add student with success', () => {

    const myCode =  code.getCode()
    const Myname = name.getName()

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerCode(myCode, Myname)
    home_page.searchStundent(Myname, myCode)
});