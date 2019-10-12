import versions from "./versions-data.json";

export class Versions {
    static getVersions() {
        return new Promise((resolve, reject) => {
            if (versions) {
                resolve(versions);
            } else {
                reject();
            }
        });
    }

    static getVersionsByModel(model) {
        return new Promise((resolve, reject) => {
            const versions = versions.items.find(p => p.model === parseInt(model));

            if (versions) {
                resolve(versions);
            } else {
                reject();
            }
        });
    }
}