function calculatePercentageChange(original, newAmount) {
  if (original === newAmount) {
    return 0
  }

  const difference = newAmount - original;
  const percentageDifference = Math.round((difference / original) * 100);
  console.log(`Percentage diff: ${percentageDifference}`)
  return percentageDifference;
}
// calculatePercentageChange(75, 50)
module.exports = { calculatePercentageChange };
