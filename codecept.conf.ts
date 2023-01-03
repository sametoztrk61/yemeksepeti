import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://github.com',
      show: true,
      browser: 'chromium'
      
     
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'yeni',
  fullPromiseBased: false
}