function firstGreater(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10){
      return i
    }
    return -1;
  }
}