function calculator(a, b) {
  const dividend = b ** 2 / a ** 2;

  console.log({ dividend });

  const sub = 1 - dividend;

  if (sub < 0) {
    return 'could not be determined because of negative sign in square-root';
  } else {
    return +Math.sqrt(sub).toFixed(4);
  }
}

export default { calculator };
