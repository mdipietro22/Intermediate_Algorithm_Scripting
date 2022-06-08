function diffArray(arr1, arr2) {
  const newArr = [];
  function swapThisBih(first, second) {
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) == -1) {
      newArr.push(first[i]);
      }
    }
  }

  swapThisBih(arr1, arr2);
  swapThisBih(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);