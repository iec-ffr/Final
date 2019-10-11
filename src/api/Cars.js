import cars from "./cars-data.json";

export class Cars {
    static getCars() {
        return new Promise((resolve, reject) => {
            if (cars) {
                resolve(cars);
            } else {
                reject();
            }
        });
    }

    static getCarsById(id) {
        return new Promise((resolve, reject) => {
            const product = cars.items.find(p => p.id === parseInt(id));

            if (cars) {
                resolve(cars);
            } else {
                reject();
            }
        });
    }
}