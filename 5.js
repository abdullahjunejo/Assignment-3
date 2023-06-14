function numberOfProduct(numbers) {
  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  console.log("total product is " + product);
}

numberOfProduct([2, 5, 8, 6, 4, 7]);
