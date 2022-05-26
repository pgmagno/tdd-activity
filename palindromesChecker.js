function palindromesChecker(word) {

    // returns a copy of the String argument without SPACES
    let cleanString = word.replace(/ /g, "");    

    // ends executions if the String is too short
    if (cleanString.length < 2 || cleanString.length > 10000) {
        return null;
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