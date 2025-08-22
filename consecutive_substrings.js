function consecutiveSubstrings(string) { //Define the function
  const result = []; //Create Empty array for results
  if (string.length === 0) return result; // return empty array when str length is 0
  
  for (let i = 0; i < string.length; i++) { // Iterate over each character position in the string as a starting point 
      for (let j = 1; j <= string.length - i; j++) { // Iterate over possible substring lengths starting from the current position
          result.push(string.slice(i, i + j)); // Add the substring from the current position with the current length to the result array
      }
  }
  return result; // Return the complete array of all consecutive substrings
}

if (require.main === module) {
  console.log(consecutiveSubstrings("abc")); // ["a", "ab", "abc", "b", "bc", "c"]
  console.log(consecutiveSubstrings("a"));   // ["a"]
  console.log(consecutiveSubstrings(""));    // []
  console.log(consecutiveSubstrings("abcd")); // ["a", "ab", "abc", "abcd", "b", "bc", "bcd", "c", "cd", "d"]
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
