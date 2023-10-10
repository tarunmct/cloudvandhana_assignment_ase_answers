function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArray = sortDescending(inputArray);
  console.log(sortedArray); 