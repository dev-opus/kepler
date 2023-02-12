function calculator(a, e, theta, convert) {
  if (convert) {
    theta = theta * (180 / Math.PI);
  }

  const upperFrac = a * (1 - e ** 2);
  const lowerFrac = 1 + e * Math.cos(theta);

  return (upperFrac / lowerFrac).toFixed(3);
}

export default { calculator };
