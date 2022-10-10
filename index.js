const appConfig = require("./src/configs/app");
const environment = process.env.ENVIRONMENT || "development";
console.log(environment);
console.log(appConfig.apiUrl);
