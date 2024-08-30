const number = parseInt(prompt("Enter the number: "), 10);

const fac = (number) => {
  if (number <= 1) {
    return 1;
  } else {
    return number * fac(number - 1);
  }
};

console.log(`The factorial of ${number} is ${fac(number)}`);
