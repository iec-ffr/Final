import optinals from "./optionals-data.json";

export class Optionals {
    static getOptionals() {
        return new Promise((resolve, reject) => {
            if (optinals) {
              resolve(optinals);
            } else {
              reject();
            }
        });
    }
    
  static getOptionalsById(id) {
    return new Promise((resolve, reject) => {
      const optinals = optinals.items.find(p => p.id === parseInt(id));

      if (optinals) {
        resolve(optinals);
      } else {
        reject();
      }
    });
  }
}