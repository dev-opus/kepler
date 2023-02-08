function calculator(a, f) {
  const dividend = 1 / f;
  const subtracted = 1 - dividend;

  const ans = a * subtracted;
  return ans.toFixed(3);
}

export default { calculator };
