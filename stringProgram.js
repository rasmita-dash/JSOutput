//************Reverse each word in string************ */
function reverseEachWord(str){
    //reverse the whole string
    let revString = reverseBySeparator(str,'');
    // reverse the word sequence of the reversed string
    return reverseBySeparator(revString, ' ');
}

function reverseBySeparator(text, separator){
    return text.split(separator).reverse().join(separator);
}

console.log(reverseEachWord("This is Rasmita Dash"));


//********************************ToTitleCase*************************** */
function toTitleCase(str){
    let words = str.split(' ');
    let titleWords = [];
    for(let word of words){
        let letters = word.split('');
        letters[0] = letters[0].toUpperCase();
        titleWords.push(letters.join(''));
    }
    return titleWords.join(' ');
}
console.log(toTitleCase("rasmita dash"))

// //**************************isPallindrome**************** */
function isPallindrome(str){
    str=str.replace(/\w/g, '');
    return str == str.split('').reverse().join('')
}
console.log(isPallindrome("a    b a"));

