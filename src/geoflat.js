function calculator(a, b) {
  const subtract = a - b;
  const ans = subtract / a;

  return ans.toFixed(3);
}

export default { calculator };
