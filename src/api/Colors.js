import colors from "./colors-data.json";

export class Colors {
    static getColors() {
        return new Promise((resolve, reject) => {
            if (colors) {
                resolve(colors);
            } else {
                reject();
            }
        });
    }

    static getColorsById(id) {
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
