//*********************Anagram******************** */
//// 2 different words having same set of letters.
function isAnagram (string1, string2){  
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    
    return string1.split('').sort().join('') == string2.split('').sort().join('')
}

console.log(isAnagram ("Army", 'Mary'))