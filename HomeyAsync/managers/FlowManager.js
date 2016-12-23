"use strict";
class FlowManager {
    constructor() {
        this._flow = Homey.manager("flow");
    }
    trigger(method, tokens, state) {
        return new Promise((resolve, reject) => {
            this._flow.trigger(method, tokens, state, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
    triggerDevice(method, tokens, state, device_data) {
        return new Promise((resolve, reject) => {
            this._flow.triggerDevice(method, tokens, state, device_data, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
    getTriggerArgs(trigger_id) {
        return new Promise((resolve, reject) => {
            this._flow.getTriggerArgs(trigger_id, (err, result) => {
                if (!err)
                    resolve(result);
                else
                    reject(err);
            });
        });
    }
    on(event, callback) {
        this._flow.on(event, callback);
    }
}
exports.FlowManager = FlowManager;
