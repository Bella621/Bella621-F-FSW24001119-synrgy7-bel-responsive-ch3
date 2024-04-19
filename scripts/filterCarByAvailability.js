function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
for (let i = 0; i< cars.length; i++) {
  const car = cars[i];
  //mobil avaible
  if (car.available === true) {
    result.push(car);
  }
}
console.log("data mobil avaible" , result)
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
