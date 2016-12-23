"use strict";
class LedringManager {
    constructor() {
        this._ledring = Homey.manager("ledring");
    }
    animate(name, options, priority, duration) {
        return new Promise((resolve, reject) => {
            this._ledring.animate(name, options, priority, duration, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
    registerScreensaver(name, animation) {
        return new Promise((resolve, reject) => {
            this._ledring.registerScreensaver(name, animation, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
    unregisterScreensaver(name) {
        return new Promise((resolve, reject) => {
            this._ledring.unregisterScreensaver(name, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
}
exports.LedringManager = LedringManager;
