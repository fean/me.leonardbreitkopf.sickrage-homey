"use strict";
class SpeechInputManager {
    constructor() {
        this._speechInput = Homey.manager("speech-input");
    }
    ask(question) {
        return new Promise((resolve, reject) => {
            this._speechInput.ask(question, (err, result) => {
                if (!err)
                    resolve(result);
                else
                    reject(err);
            });
        });
    }
    confirm(question) {
        return new Promise((resolve, reject) => {
            this._speechInput.confirm(question, (err, confirmed) => {
                if (!err)
                    resolve(confirmed);
                else
                    reject(err);
            });
        });
    }
    addTrigger(trigger) {
        return new Promise((resolve, reject) => {
            this._speechInput.addTrigger(trigger, (err) => {
                if (!err)
                    resolve();
                else
                    reject(err);
            });
        });
    }
    removeTrigger(trigger_id) {
        return new Promise((resolve, reject) => {
            this._speechInput.removeTrigger(trigger_id, (err) => {
                if (!err)
                    resolve();
                else
                    reject(err);
            });
        });
    }
    on(event, callback) {
        this.on(event, callback);
    }
}
exports.SpeechInputManager = SpeechInputManager;
