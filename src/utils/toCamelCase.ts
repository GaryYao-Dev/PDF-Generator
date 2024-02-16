function toCamelCase(str: string) {
  return str
    .toLowerCase() // convert to lowercase
    .split(' ') // split the string into an array of words
    .map(
      (word, index) =>
        index === 0 ? word : word[0].toUpperCase() + word.slice(1), // capitalize the first letter of each word except the first word
    )
    .join('') // join the words back into a single string
}

export default toCamelCase
