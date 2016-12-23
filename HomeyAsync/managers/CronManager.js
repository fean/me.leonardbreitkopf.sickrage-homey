"use strict";
class CronManager {
    constructor() {
        this._cron = Homey.manager("cron");
    }
    getTasks() {
        return new Promise((resolve, reject) => {
            this._cron.getTasks((err, tasks) => {
                if (!err)
                    resolve(tasks);
                else
                    reject(err);
            });
        });
    }
    ;
    registerTask(name, when, data) {
        return new Promise((resolve, reject) => {
            this._cron.registerTask(name, when, data, (err, task) => {
                if (!err)
                    resolve(task);
                else
                    reject(err);
            });
        });
    }
    unregisterTask(name) {
        return new Promise((resolve, reject) => {
            this._cron.unregisterTask(name, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
    on(event, callback) {
        this._cron.on(event, callback);
    }
}
exports.CronManager = CronManager;
