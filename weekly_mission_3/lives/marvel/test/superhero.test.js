const Superhero = require("./../App/Superhero")

describe ("Unit test for superhero", () => {
    test("Caso 1, get a superhero",() => {

        const ironman = new Superhero("Tony Stark","Iron Man","Robert Dawney Jr",)
        expect(ironman.name).toBe("Tony Stark"),
        expect(ironman.heroName).toBe("Iron Man"),
        expect(ironman.actor).toBe("Robert Dawney Jr")

    });
})