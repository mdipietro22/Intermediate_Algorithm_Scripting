function pairElement(str) {
  //create object for pair lookup
  let pairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  }
  //split string into array of characters
  let arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

pairElement("ATA");