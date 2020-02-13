const wd = require('wd');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'WUJ01JN0TW',
  automationName: 'UiAutomator2',
  app: 'D:/tng_consumer_4.1.3_dr_1220.apk' // relative to root of project
};
driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
})
test('appium renders', async () => {
});