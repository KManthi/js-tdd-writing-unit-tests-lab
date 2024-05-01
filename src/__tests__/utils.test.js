import { isPalindrome } from "../utils";

describe('isPalindrome', () => {
    it('returns true when a word is the same forwards as it is backwards', () => {
        const word = 'racecar';
        const result = isPalindrome(word);
        expect(result).toBe(true);
    });
    it('returns false when a word is not the same forwards as it is backwards', () => {
        const word = 'car';
        const result = isPalindrome(word);
        expect(result).toBe(false);
    });
    it('returns true for words that have both uppercase and lowercase letters', () => {
        const word = 'rAceCar';
        const result = isPalindrome(word);
        expect(result).toBe(true);
    });
    it('throws an error if the input includes non-alphabetic characters', () => {
        const word = 'rac3c4r';
        expect(() => isPalindrome(word)).toThrow();
    });
    it('throws an error for empty inputs', () => {
        const word = '';
        expect(() => isPalindrome(word)).toThrow();
    });
})