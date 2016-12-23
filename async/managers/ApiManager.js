"use strict";
class ApiManager {
    constructor() {
        this._api = Homey.manager("api");
    }
    get(path) {
        return new Promise((resolve, reject) => {
            this._api.get(path, (err, result) => {
                if (!err)
                    resolve(result);
                else
                    reject(err);
            });
        });
    }
    post(path, body) {
        return new Promise((resolve, reject) => {
            this._api.post(path, body, (err, result) => {
                if (!err)
                    resolve(result);
                else
                    reject(err);
            });
        });
    }
    put(path, body) {
        return new Promise((resolve, reject) => {
            this._api.put(path, body, (err, result) => {
                if (!err)
                    resolve(result);
                else
                    reject(err);
            });
        });
    }
    delete(path) {
        return new Promise((resolve, reject) => {
            this._api.delete(path, (err, result) => {
                if (!err)
                    resolve(result);
                else
                    reject(err);
            });
        });
    }
    realtime(event, data) {
        return new Promise((resolve, reject) => {
            this._api.realtime(event, data, (err, result) => {
                if (!err)
                    resolve(result);
                else
                    reject(err);
            });
        });
    }
}
exports.ApiManager = ApiManager;
