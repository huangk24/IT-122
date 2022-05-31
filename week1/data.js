let cars = [
    { name: "M8 Competition Gran Coupe", brand : "BMW", horsepower : 617, 
      price : 130000 }, 
    { name: "CLS 53 AMG", brand : "Mercedes Benz", horsepower : 435, 
      price : 87550 }, 
    { name: "Panamera GTS Sport Turism", brand : "Prosche", horsepower : 473, 
      price : 136900 },
    { name: "RS7 Sportback", brand : "Audi", horsepower : 591, 
      price : 118500 }, 
    { name: "Ghibli Trofeo", brand : "Maserati", horsepower : 580, 
      price : 113700 }
]

export let getAll = () => {
    return cars;
};

export let getItem = (value) => {
    return cars.find((item) => {
        return item["name"] === value;
    })
};

export let addItem = (newCar) => {
  if (cars.some(car => car.name === newCar.name)) {
    // item already exist
    return false;
  } else {
    cars.push({name : newCar.name, brand: newCar.brand, horsepower: newCar.horsepower, price: newCar.price}); 
    return true;
  }
}

export let deleteItem = (value) => {
  if (cars.some(car => car.name === value)) {
    let index = cars.indexOf(value);
    cars.splice(index, 1);
    return true;
  } else {
    // item is not in the array
    return false;
  }
}