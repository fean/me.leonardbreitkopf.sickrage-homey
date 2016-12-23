"use strict";
class NotificationManager {
    constructor() {
        this._notifications = Homey.manager("notifications");
    }
    createNotification(notification) {
        return new Promise((resolve, reject) => {
            this._notifications.createNotification(notification, (err, notification) => {
                if (!err)
                    resolve(notification);
                else
                    reject(err);
            });
        });
    }
}
exports.NotificationManager = NotificationManager;
