"use strict";
class CloudManager {
    constructor() {
        this._cloud = Homey.manager("cloud");
    }
    generateOAuth2Callback(url, got_url_callback, got_code_callback) {
        this._cloud.generateOAuth2Callback(url, got_url_callback, got_code_callback);
    }
    registerWebhook(id, secret, data, onMessage) {
        return new Promise((resolve, reject) => {
            this._cloud.registerWebhook(id, secret, data, onMessage, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
    unregisterWebhook(id) {
        return new Promise((resolve, reject) => {
            this._cloud.unregisterWebhook(id, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
    getLocalAddress() {
        return new Promise((resolve, reject) => {
            this._cloud.getLocalAddress((err, localAddress) => {
                if (!err)
                    resolve(localAddress);
                else
                    reject(err);
            });
        });
    }
    getHomeyId() {
        return new Promise((resolve, reject) => {
            this._cloud.getHomeyId((err, cloudId) => {
                if (!err)
                    resolve(cloudId);
                else
                    reject(err);
            });
        });
    }
}
exports.CloudManager = CloudManager;
