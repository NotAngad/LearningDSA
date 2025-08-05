const sumOfK = (nums = [], k = 0) => {
  let l = 0;
  let r = 0;

  let sum = 0;
  let maxLength = 0;

  while (r < nums.length) {
    sum += nums[r];

    if (sum <= k) {
      maxLength = Math.max(maxLength, r - l + 1);
    } else if (sum > k) {
      sum = sum - nums[l];
      l++;
    }

    r++;
  }

  return maxLength;
};

console.log(sumOfK([3, 3, 3], 3));
