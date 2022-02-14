

const {sum, square, cube} = require("./index")

describe("Should contain tests for sum", () => {
    it("should add 2 numbers", () => {
        //Arrange
        const a = 4 
        const b = 6
        const expectedResult = 10

        //Act
        const actual = sum(a, b)

        //Assert 
        expect(actual).toBe(expectedResult)
    })

    it("should return an error for invalid inputs", () => {
        //Arrange
        const a = null 
        const b = 6
        const expectedResult = "Invalid Input"

        //Act
        const actual = sum(a, b)

        //Assert 
        expect(actual).toBe(expectedResult)
    })
})

describe("Should contain tests for square", () => {
    it("Should square a number", () =>{
        
        //Arrange
        const num = null
        const expectedResult = 'Invalid input'
        //Act
        const actual = square(num)
        //Assert
        expect(actual).toBe(expectedResult)
    })
})

describe("Should contain tests for sqaure", () => {
    it("Should cube a number", () => {
        
        //Arrange
        const num = 2
        const expectedResult = 8
        //Act
        const actual = cube(num)
        //Assert
        expect(actual).toBe(expectedResult)
    })
})