function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  
  result.sort((a, b) => b.year - a.year);
  // Tulis code-mu disini
  console.log("data sortir descending" , result)

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
