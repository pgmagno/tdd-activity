const pChecker = require("./palindromesChecker");

test("returns FALSE when passed known non-palindrome", () => {
    let str = "ABAB";
    expect(pChecker(str)).toBe(false);
});

test("returns TRUE when passed known palindrome", () => {
    let str = "ABBA";
    expect(pChecker(str)).toBe(true);
});

test("returns TRUE when passed known palindrome with spaces", () => {
    let str = "1234 4 3 2 1";
    expect(pChecker(str)).toBe(true);
});

test("returns TRUE when passed a one-character word", () => {
    let str = "A";
    expect(pChecker(str)).toBe(true);
});

test("returns TRUE when passed an empty string", () => {
    let str = "";
    expect(pChecker(str)).toBe(true);
});

test("returns NULL when passed a String with more than 1000 characters", () => {
    
    let str = "";    
    while(str.length != 1001) {
        str += "A";
    }
    expect(pChecker(str)).toBeNull();
});

test("returns TRUE when passed a palindrome of a 1000 'A' characters", () => {
    
    let str = "";
    
    while(str.length != 1000) {
        str += "A";
    }
    expect(pChecker(str)).toBe(true);
});

test("returns TRUE when passed Odd-numbered known palindromes", () => {
    let str = "1234321";
    expect(pChecker(str)).toBe(true);
});