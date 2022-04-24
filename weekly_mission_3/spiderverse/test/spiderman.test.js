const Spiderman = require("./../app/spiderman")

describe("Unit tests for Spiderman class", () => {
    test("1. Create an spiderman object", () => {
        const andrewGarfield = new Spiderman("Spiderman1", 31, "Andrew Garfield", 2, "Sony")
        expect(andrewGarfield.name).toBe("Spiderman1")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.numMovies).toBe(2)
        expect(andrewGarfield.cinemaStudio).toBe("Sony")
    })
})


describe("Unit tests for Spiderman class", () => {
    test("2. Create an spiderman object with a method", () => {
        const tomHolland = new Spiderman("Spiderman New", 25, "Tom Holland", 5, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studios")
    })
})