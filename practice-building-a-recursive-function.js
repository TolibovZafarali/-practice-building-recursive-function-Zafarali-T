function reverseString(inputString) {
    if (inputString.length <= 1) {
        return inputString
    }

    const lastChar = inputString.charAt(inputString.length - 1)

    return lastChar + reverseString(inputString.slice(0, -1))
}

console.log(reverseString("Hello"))