"use strict";
class DriverManager {
    constructor() {
        this._driver = Homey.manager("driver");
    }
    getDriver(id) {
        return this._driver.getDriver(id);
    }
}
exports.DriverManager = DriverManager;
