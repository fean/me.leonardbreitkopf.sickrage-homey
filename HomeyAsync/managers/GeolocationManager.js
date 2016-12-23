"use strict";
class GeolocationManager {
    constructor() {
        this._geo = Homey.manager("geolocation");
    }
    getLocation() {
        return new Promise((resolve, reject) => {
            this._geo.getLocation((err, location) => {
                if (!err)
                    resolve(location);
                else
                    reject(err);
            });
        });
    }
}
exports.GeolocationManager = GeolocationManager;
