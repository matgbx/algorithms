const calculateRainWater = (arr) => {
  const left = [];
  const right = new Array(arr.length);
  let water = 0;

  left[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    left[i] = Math.max(left[i-1], arr[i]);
  }
  right[arr.length-1] = arr[arr.length-1];
  for (let i = arr.length-2; i >=0; i--) {
    right[i] = Math.max(right[i+1], arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    water += Math.min(left[i], right[i]) - arr[i];
  }
  return water;
}

// test case:
// arr1 = [0,1,0,2,1,0,1,3,2,1,2,1]
// console.log(calculateRainWater(arr1)); // ===> should equal 6;