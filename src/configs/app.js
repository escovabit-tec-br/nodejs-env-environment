const appConfig = {
  development: {
    apiUrl: "https://api.publicapis.org/entries",
  },
  production: {
    apiUrl: "https://catfact.ninja/fact",
  },
};
const environment = process.env.ENVIRONMENT || "development";
const resultData = appConfig[environment];

module.exports = resultData;
