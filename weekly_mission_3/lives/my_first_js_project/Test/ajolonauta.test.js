const Ajolonauta = require("./../App/ajolonauta")

describe ("Pruebas de unidad de Ajolonauta", () => {
    test("CASO PRUEBA 1: CREACION DE OBJETO",() => {
        const woopa = new Ajolonauta("Woopa")
        expect(woopa.name).toBe("Woopa");

    });
})