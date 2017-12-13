import store from "store.js";
import { remote } from "electron";

const env = process.env.NODE_ENV || "production";
const config = {
  ...require(`./config/${env}`),
};
const i18n = require("y18n")({
  directory: `${remote.app.getAppPath()}/locales`,
  updateFiles: false,
  locale: "en",
});

const logs = [];
const app = {
  env,
  config,
  store,
  i18n,
  logs,
  log(message) {
    logs.push(message);
  },
};

window.__ = i18n.__;
window.__n = i18n.__n;

global.app = app;
module.exports = app;
