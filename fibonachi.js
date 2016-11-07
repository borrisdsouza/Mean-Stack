var re = function (n) {
  if (n <=2)
  {
    return 1;
  }
  else {
    return re(n-1) + re(n-2)
  }
};

console.log(re(42));
