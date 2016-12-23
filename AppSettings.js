"use strict";
class SickrageSettings {
    constructor(settings) {
        this.__listeners = [];
        this.__settingManager = settings;
    }
    get host() {
        return this.__settingManager.get("sr_host");
    }
    set host(value) {
        this.__emitChange("host", value, this.host);
        this.__settingManager.set("sr_host", value);
    }
    get port() {
        return this.__settingManager.get("sr_port");
    }
    set port(value) {
        this.__emitChange("port", value, this.port);
        this.__settingManager.set("sr_port", value);
    }
    get useSSL() {
        return this.__settingManager.get("sr_ssl");
    }
    set useSSL(value) {
        this.__emitChange("useSSL", value, this.useSSL);
        this.__settingManager.set("useSSL", value);
    }
    get useAuthentication() {
        return this.__settingManager.get("sr_auth");
    }
    set useAuthentication(value) {
        this.__emitChange("useAuthentication", value, this.useAuthentication);
        this.__settingManager.set("sr_auth", value);
    }
    get username() {
        return this.__settingManager.get("sr_username");
    }
    set username(value) {
        this.__emitChange("username", value, this.username);
        this.__settingManager.set("sr_username", value);
    }
    get password() {
        return this.__settingManager.get("sr_password");
    }
    set password(value) {
        this.__emitChange("password", value, this.password);
        this.__settingManager.set("sr_password", value);
    }
    get apiKey() {
        return this.__settingManager.get("sr_key");
    }
    set apiKey(value) {
        this.__emitChange("password", value, this.apiKey);
        this.__settingManager.set("sr_password", value);
    }
    __emitChange(property, oldVal, newVal) {
        this.__listeners.forEach(listener => {
            listener(property, newVal, oldVal);
        });
    }
    onchange(callback) {
        this.__listeners.push(callback);
    }
}
exports.SickrageSettings = SickrageSettings;
class AppSettings {
    static get sickrage() {
        if (!this.__sickrage)
            this.__sickrage = new SickrageSettings(this.__settingManager);
        return this.__sickrage;
    }
}
AppSettings.__settingManager = Homey.manager('settings');
exports.AppSettings = AppSettings;
