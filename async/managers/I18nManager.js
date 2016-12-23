"use strict";
class I18nManager {
    constructor() {
        this._i18n = Homey.manager("i18n");
    }
    __(text) {
        return this._i18n.__(text);
    }
    getLanguage() {
        return this._i18n.getLanguage();
    }
    getUnits() {
        return this._i18n.getUnits();
    }
}
exports.I18nManager = I18nManager;
