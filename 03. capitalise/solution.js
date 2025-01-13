function capitalise(word) {
  const lowercase = word.toLowerCase()
  const firstLetter = lowercase.charAt(0).toUpperCase()
  word = firstLetter + lowercase.slice(1)
  return word;
}

console.log(capitalise('test'))
module.exports = { capitalise };

// word[0] indexes to the first letter of the string
// 
