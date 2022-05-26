const pChecker = require("./palindromesChecker");

test("when passed known non-palindrome return false", () => {
    let str = "ABAB";
    expect(pChecker(str)).toBe(false);
});

test("when passed known palindrome return true", () => {
    let str = "ABBA";
    expect(pChecker(str)).toBe(true);
});

test("handling of spaces in palindrome", () => {
    let str = "1234 4 3 2 1";
    expect(pChecker(str)).toBe(true);
});

test("when passed a String with fewer than 2 characters, return null", () => {
    let str = "A";
    expect(pChecker(str)).toBeNull();
});

test("when passed a String with more than 1000 characters, return null", () => {
    
    let str = "";
    
    while(str.length != 1001) {
        str += "A";
    }
    expect(pChecker(str)).toBeNull();
});

test("when passed a String with more than 1000 characters, return true", () => {
    
    let str = "";
    
    while(str.length != 1000) {
        str += "A";
    }
    expect(pChecker(str)).toBe(true);
});

test("when passed a String with more than 999 characters, return true", () => {
    
    let str = "";
    
    while(str.length != 999) {
        str += "A";
    }
    expect(pChecker(str)).toBe(true);
});

test("handling of Odd-numbered known palindromes", () => {
    let str = "1234321";
    expect(pChecker(str)).toBe(true);
});
