exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: '/home/julio/code/app/app-release.apk',
      platform: 'Android',
      device: 'pixel',
      desiredCpabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './steps/*_test.js',
  name: 'code'
}