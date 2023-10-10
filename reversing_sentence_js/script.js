function reverseWords(sentence) {
    const words = sentence.split(' ');
    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  const inputSentence = "Hello World";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); 