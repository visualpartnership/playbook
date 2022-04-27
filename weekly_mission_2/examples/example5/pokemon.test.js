import Pokemon from "./pokemon";

test('Test 1) Create a new object pokemon',()=>{
    const myPokemon = new Pokemon('Pikachu');
    expect(myPokemon.name).toBe('Pikachu');
    // expect(myPokemon.name).toBe('Pikachusssss');
    // expect(4 + 2).tobe(10);
})
// escribe la prueba
// falla la prueba
// codigo correcto