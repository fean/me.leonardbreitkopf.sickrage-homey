"use strict";
const AppSettings_1 = require("../AppSettings");
const http = require("http");
const https = require("https");
class ClientBase {
    constructor() {
        this.__options = {
            host: AppSettings_1.AppSettings.sickrage.host,
            port: AppSettings_1.AppSettings.sickrage.port,
            useSSL: AppSettings_1.AppSettings.sickrage.useSSL,
            useAuthentication: AppSettings_1.AppSettings.sickrage.useAuthentication,
            username: AppSettings_1.AppSettings.sickrage.username,
            password: AppSettings_1.AppSettings.sickrage.password,
            apiKey: AppSettings_1.AppSettings.sickrage.apiKey
        };
        AppSettings_1.AppSettings.sickrage.onchange(this.__optionsChanged);
    }
    __rebuild() {
        let scheme = this.__options.useSSL
            ? "https"
            : "http";
        let host = this.__options.host;
        let port = this.__options.port;
        let key = this.__options.apiKey;
        this.__urlBase = `${scheme}://${host}:${port}/api/${key}/?cmd=`;
    }
    __optionsChanged(prop, n, o) {
        this.__options[prop] = n;
        this.__rebuild();
    }
    __queryFromParams(params) {
        let paramString = "";
        for (let param in params)
            params += `&${param}=${param[param]}`;
        return "?" + paramString.substring(0, 1);
    }
    __doHttp(url) {
        return new Promise((resolve, reject) => {
            http.get(url, (res) => {
            });
        });
    }
    __doHttps(url) {
        return new Promise((resolve, reject) => {
            https.get(url, (res) => {
            });
        });
    }
    callApi(cmd, params) {
        let url = this.__urlBase + cmd +
            this.__queryFromParams(params);
        if (this.__options.useSSL)
            return this.__doHttps(url);
        return this.__doHttp(url);
    }
}
exports.ClientBase = ClientBase;
