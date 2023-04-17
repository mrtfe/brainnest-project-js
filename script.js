const findBiggerInt = (a, b) => {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else return "equal";
};

console.log(findBiggerInt(7, 7));
