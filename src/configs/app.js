const appConfig = {
  development: {
    apiUrl: "https://api.publicapis.org/entries",
  },
  production: {
    apiUrl: "https://catfact.ninja/fact",
  },
};
const environment = process.env.ENVIRONMENT || "development";
const resutData = appConfig[environment];

module.exports = resutData;
