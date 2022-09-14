// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:
let size = array.length;

//find smallest number is the array
for (let i = 0; i < size; i++) {
  for (let j = i + 1; j < size; j++) {
    if (array[i] > array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log("The smallest element of the array is::" + array[0]);
