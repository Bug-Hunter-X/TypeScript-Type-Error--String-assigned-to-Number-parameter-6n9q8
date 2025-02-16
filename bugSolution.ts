function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct usage

// OR using type assertion (Use cautiously)
let result2 = add(1, <number>"2");

//Best practice: Input validation and type handling
function addSafe(a: number, b: string | number): number {
  const numB = typeof b === 'number' ? b : parseInt(b);
  if(isNaN(numB)){
    return 0; //Or throw an error
  }
  return a + numB;
}
let result3 = addSafe(1, "2"); //Handles string input safely
let result4 = addSafe(1, 2);  // Correct usage