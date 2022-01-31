module.exports = (healthProblems) => {
  if (healthProblems) {
    const sd = healthProblems.reduce((acc, curr, idx) => {
      let num = 0;
      if (idx % 2 !== 0) {
        num = Number(curr.slice(5));
      }
      return acc + num;
    }, 0);
    const p = -(-2.8 + sd);
    const score = (1 / (1 + Math.exp(p))) * 100;
    return score.toFixed(2);
  }
  return 0;
};
