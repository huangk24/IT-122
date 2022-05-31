import { expect } from 'chai';
import * as cars from '../data.js';

describe("Cars data", () => {
   
    it("getItem return correct car", () => {
        let result = cars.getItem("CLS 53 AMG");
        expect(result).to.deep.equal(
            {name: "CLS 53 AMG", brand : "Mercedes Benz", horsepower : 435, price : 87550}
        );
    });

    it("getItem return incorrect car", () => {
        let result = cars.getItem("");
        expect(result).to.be.undefined;
    });

    it("addItem add car successfully", () => {
        let newCar = { name: "Urus", brand : "Lamborghini", horsepower : 641, price : 218000 };
        let status = cars.addItem(newCar);
        expect(status).to.equal(true);
    });

    it("addItem fail to add car", () => {
        let newCar = { name: "CLS 53 AMG", brand : "Mercedes Benz", horsepower : 435 };
        let status = cars.addItem(newCar);
        expect(status).to.equal(false);
    });

    it("deleteItem delete car successfully", () => {
        let carName = "Ghibli Trofeo";
        let status = cars.deleteItem(carName);
        expect(status).to.equal(true);
    });

    it("deleteItem fail to delete car", () => {
        let carName = "Macan GTS";
        let status = cars.deleteItem(carName);
        expect(status).to.equal(false);
    });
});
