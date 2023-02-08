function calculator(a, b) {
  const dividend = b / a;
  const ans = a - dividend;

  return ans.toFixed(3);
}

export default { calculator };
