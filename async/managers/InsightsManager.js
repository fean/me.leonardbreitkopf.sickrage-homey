"use strict";
class InsightsManager {
    constructor() {
        this._insights = Homey.manager("insights");
    }
    getLogs() {
        return new Promise((resolve, reject) => {
            this._insights.getLogs((err, logs) => {
                if (!err)
                    resolve(logs);
                else
                    reject(err);
            });
        });
    }
    getLog(name) {
        return new Promise((resolve, reject) => {
            this._insights.getLog(name, (err, logs) => {
                if (!err)
                    resolve(logs);
                else
                    reject(err);
            });
        });
    }
    createLog(name, options) {
        return new Promise((resolve, reject) => {
            this._insights.createLog(name, options, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
    deleteLog(name) {
        return new Promise((resolve, reject) => {
            this._insights.deleteLog(name, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
    createEntry(name, value, date) {
        return new Promise((resolve, reject) => {
            this._insights.createEntry(name, value, date, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
}
exports.InsightsManager = InsightsManager;
