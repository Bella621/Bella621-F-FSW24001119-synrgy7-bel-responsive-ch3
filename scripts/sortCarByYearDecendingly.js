function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);
  
// Clone array untuk menghindari side-effect
const result = [...cars];
  
// Implementasi algoritma Bubble Sort
for (let i = 0; i < result.length - 1; i++) {
  for (let j = 0; j < result.length - 1 - i; j++) {
    if (result[j].year < result[j + 1].year) {
      // Swap
      const temp = result[j];
      result[j] = result[j + 1];
      result[j + 1] = temp;
    }
  }
}

// Tulis code-mu disini
console.log("data sortir descending", result)

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
