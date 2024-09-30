function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: array with 0 or 1 element is already sorted
    }
  
    const pivot = arr[arr.length   
   - 1]; // Choose the last element as the pivot
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);   
  
      } else {
        right.push(arr[i]);
      }
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  // Example usage:   
  
  const unsortedArray = [5, 2, 9, 1, 7, 3];
  const sortedArray = quickSort(unsortedArray);
  console.table(sortedArray); // Output: [1, 2, 3, 5, 7, 9]