"use strict";
class SettingsManager {
    constructor() {
        this._settings = Homey.manager("settings");
    }
    get(name) {
        return this._settings.get(name);
    }
    set(name, value) {
        return this._settings.set(name, value);
    }
    unset(name) {
        return this._settings.unset(name);
    }
    getKeys() {
        return this._settings.getKeys();
    }
}
exports.SettingsManager = SettingsManager;
