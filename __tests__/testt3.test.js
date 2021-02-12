const {isAnagram} = require("../ejercicio3");

describe("Es un anagrama valido", () => {
    test("anagram es anagrama de nagaram", () => {
        expect(isAnagram("anagram", "nagaram")).toBeTruthy();
    });

    test("rat no es anagrama de car", () => {
        expect(isAnagram("rat", "car")).toBeFalsy();
    });

    test("fried es anagrama de fired", () => {
        expect(isAnagram("fried", "fired")).toBeTruthy();
    });

    test("listen no es anagrama de silentt", () => {
        expect(isAnagram("listen", "silentt")).toBeFalsy();
    });
});