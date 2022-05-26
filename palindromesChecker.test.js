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

// test("when passed a String with more than 1000 characters, return null", () => {
//     let str = "123456";
//     expect(pChecker(str)).toBeNull();
// });

// test("when passed a String with 999 characters or fewer, return true or false, but not null", () => {
//     let str = "123456";
//     expect(pChecker(str)).not.toBeNull();
// });

test("handling of Odd-numbered known palindromes", () => {
    let str = "1234321";
    expect(pChecker(str)).toBe(true);
});
