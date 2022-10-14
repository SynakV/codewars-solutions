function squareSum(numbers) {
  return numbers
    .map((number) => number ** 2)
    .reduce((acc, number) => acc + number, 0);
}
