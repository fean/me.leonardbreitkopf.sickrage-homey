"use strict";
class SpeechOutputManager {
    constructor() {
        this._speechOutput = Homey.manager("speech-output");
    }
    say(text) {
        return new Promise((resolve, reject) => {
            this._speechOutput.say(text, (err, success) => {
                if (!err)
                    resolve(success);
                else
                    reject(err);
            });
        });
    }
}
exports.SpeechOutputManager = SpeechOutputManager;
