import colors from "./colors-data.json";

export class Colors {
    static getCars() {
        return new Promise((resolve, reject) => {
            if (colors) {
                resolve(colors);
            } else {
                reject();
            }
        });
    }

    static getCarsById(id) {
        return new Promise((resolve, reject) => {
            const colors = colors.items.find(p => p.id === parseInt(id));

            if (colors) {
                resolve(colors);
            } else {
                reject();
            }
        });
    }
}
