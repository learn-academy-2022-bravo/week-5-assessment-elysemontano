// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// Template for my tests:
// describe("hello", () => {
//   it("returns a string that says hi", () => {
//     expect(hello()).toEqual("hi")
//   })
// })


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.



describe("decodifier", () => {
  it("converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(decodifier(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(decodifier(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(decodifier(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// ● decodifier › converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// ReferenceError: decodifier is not defined



// b) Create the function that makes the test pass.

// Pseudocode
// Create a function that takes in a string
// Use .replace method
// Using global modifier in a regex
// Return our modified string


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

describe("tootyFruity", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    expect(tootyFruity(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(tootyFruity(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// ● tootyFruity › takes in an array of words and a single letter and returns all the words that contain that particular letter

// ReferenceError: tootyFruity is not defined

// b) Create the function that makes the test pass.

// Pseudocode 
// create a function called tootyFruity
// use .filter to filter out the values that has the specified letter
// use .toUpperCase to and || to also include capital letters
// use .includes to look for the letter in the value



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false

describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house. A full house is exactly one pair and one three of a kind", () => {
      const hand1 = [5, 5, 5, 3, 3]
      // Expected output: true
      const hand2 = [5, 5, 3, 3, 4]
      // Expected output: false
      const hand3 = [5, 5, 5, 5, 4]
      // Expected output: false
      const hand4 = [3, 5, 5, 3, 5]
      // Expected output: true
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
  })
})

// b) Create the function that makes the test pass.


// Pseudocode
// create a function called fullHouse
// count how many times a number occurs
// look for pairs
// look for toak (THREE OF A KIND)
// if pair == 2 && toak == 3 output true
// else output false
// count how many times a number occurs using .filter
// corrections use .sort to sort the array
// there can only be 2 kinds of numbers anything else = false
// use index 0 to count the lower number
// use .length-1 to count the upper number
// use if else statements to cover if the lower number has 2 0r 3 and vice versa for the upper number

const fullHouse = (arr) => {
  if (arr[0] === arr[1,2] && arr[3] === arr[4] || 
      arr[0] === arr[2,3] && arr[1] === arr[4] ||
      arr[0] === arr[3,4] && arr[1] === arr[2])
      return true
  else{
      return false
  }
}