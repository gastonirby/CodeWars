//   Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    const inverted = arr => {
      arr.forEach((el, ind) => {
        arr[ind] *= -1;
      });
    };
    inverted(array)
    return array
  }