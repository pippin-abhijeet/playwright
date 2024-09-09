import { PlaywrightTestConfig } from "@playwright/test";

const config:PlaywrightTestConfig = {    //options will apply on all the tests we run

  testMatch : ["tests/loginTests.spec.ts"],
  use : {
    headless : false,
    screenshot : "on",
    video : "retain-on-failure",

  },
  retries : 2,
  reporter : [["dot"],["json",{
    outputFile : "jsonReports/jsonReports.json"
  }],["html",{
    open : "never"
  }]]

};


export default config
