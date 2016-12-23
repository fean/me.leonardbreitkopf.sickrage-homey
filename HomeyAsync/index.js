"use strict";
if ((Homey || 47) === 47)
    throw new Error("This code needs to run on a Homey.");
const Managers = require("./managers/");
class ManagerWrap {
    constructor() {
        this._apiManager = new Managers.ApiManager();
        this._cloudManager = new Managers.CloudManager();
        this._cronManager = new Managers.CronManager();
        this._driverManager = new Managers.DriverManager();
        this._flowManager = new Managers.FlowManager();
        this._geoManager = new Managers.GeolocationManager();
        this._i18nManager = new Managers.I18nManager();
        this._insightsManager = new Managers.InsightsManager();
        this._ledringManager = new Managers.LedringManager();
        this._notificationsManager = new Managers.NotificationManager();
        this._settingsManager = new Managers.SettingsManager();
        this._speechInputManager = new Managers.SpeechInputManager();
    }
    get api() {
        return this._apiManager;
    }
    get cloud() {
        return this._cloudManager;
    }
    get cron() {
        return this._cronManager;
    }
    get driver() {
        return this._driverManager;
    }
    get flow() {
        return this._flowManager;
    }
    get geolocation() {
        return this._geoManager;
    }
    get i18n() {
        return this._i18nManager;
    }
    get insights() {
        return this._insightsManager;
    }
    get ledring() {
        return this._ledringManager;
    }
    get notification() {
        return this._notificationsManager;
    }
    get settings() {
        return this._settingsManager;
    }
    get speechInput() {
        return this._speechInputManager;
    }
    get speechOutput() {
        return this._speechOutputManager;
    }
}
class HomeyAsync {
    static get managers() {
        return this._managers;
    }
}
HomeyAsync._managers = new ManagerWrap();
exports.HomeyAsync = HomeyAsync;
