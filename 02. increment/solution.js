function increment(n) {
  return ++n;
}

module.exports = { increment };

// Remember to check the expected behaviour of this program first
// Then call the function to check how it is actually working...
console.log(increment(5))
// Write some comments down below with your findings... 
// Doesn't increment. Returns the same number passed in.
// n++ increments the value after it's returned (it returns the original value).
// ++n increments it before the value is returned (returns the new incremented value.)