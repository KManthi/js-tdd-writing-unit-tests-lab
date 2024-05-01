function reverse(string) {
    return string.split('').reverse().join('');
}

export function isPalindrome(word) {
    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error('Invalid input!');
    }

    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === reverse(lowerCaseWord);
}
