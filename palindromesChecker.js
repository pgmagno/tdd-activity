function palindromesChecker(word) {

    // returns a copy of the String argument without SPACES
    let cleanString = word.replace(/ /g, "");    

    // ends executions if the String is too short
    if (cleanString.length > 1000) {
        return null;
    }

    // all empty strings and one-character words fit the definition of palindromes
    // so it's unnecessary to proceed execution, result always TRUE
    if (cleanString.length == 1 || cleanString.length == 0) {
        return true;
    }

    let wordLength = cleanString.length;
    let wordLengthMinusOne = cleanString.length - 1;

    // Palindromes with EVEN number of letters ex: ABBA (4 letters)
    if(cleanString.length % 2 == 0) {
        for(let i = 0; i < wordLength/2 ; i++) {
            if(cleanString[i] != cleanString[wordLengthMinusOne - i]) {
                return false;                
            }
        } 
    }else {
    // Palindromes with ODD number of letters, ex: AABAA (5 letters)
        for(let i = 0; i < wordLengthMinusOne/2 ; i++) {
            if(cleanString[i] != cleanString[wordLengthMinusOne - i]) {
                return false;                
            }
        }  
    }
    return true;
}
module.exports = palindromesChecker;