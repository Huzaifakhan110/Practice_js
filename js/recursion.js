function factorial(x) 
{ 
    let x = 3;
  if (x === 2)
 {
    return x;
 }
  return x * factorial(x-1);       
}
console.log(factorial(x));
// console.log(factorial(5));