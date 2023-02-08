function calculator(a, b) {
  const dividend = b ** 2 / a;

  console.log({ dividend });

  const sub = a ** 2 - dividend;

  if (sub < 0) {
    return 'could not be determined because of negative sign in square-root';
  } else {
    return +Math.sqrt(sub).toFixed(3);
  }
}

export default { calculator };
