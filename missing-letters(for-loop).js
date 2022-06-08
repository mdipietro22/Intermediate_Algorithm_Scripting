function fearNotLetter(str) {
let allChars = "";
let notChars = new RegExp("[^" + str + "]", "g");
for (let i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
return allChars.match(notChars)
  ? allChars.match(notChars).join("")
  : undefined;
}
fearNotLetter("abce");