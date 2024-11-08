//* Testes com valores primitivos
//- Aqui vamos fazer vários teste em um teste, porém quando for fazer testes reais é importante fazer um teste para cada coisa e um describe para cada conjunto de testes de um mesmo assunto.
describe("Primitive values", () => {
  it("should test jest assertions", () => {
    const number = 10;

    //- Para primitivos podemos usar toBe, já para objetos um objeto não vai ser outro, mas pode ser igual.
    expect(number).toBe(10);
    expect(number).toEqual(10);
    //- Comparações e busca
    expect(number).not.toBeNull();
    expect(number).toBeGreaterThanOrEqual(9);
    expect(number).toBeCloseTo(10.004);
    expect(number).toHaveProperty('toString')
  });
});

//* Testes com objetos

describe("Objects", () => {
    it("should test jest assertions with objects", () => {
        const person = {
            name: 'João',
            age: 18
        }

        const anotherPerson = {...person}

        //- Vai falhar se usarmos tobe, mas não com toequal
        // expect(person).toBe(anotherPerson)
        expect(person).toEqual(anotherPerson)

        //- Podemos checar se há a propriedade e seu valor
        expect(person).toHaveProperty('age', 18)

        //- Podemos checar os valores das propriedades
        expect(person.name).toBe('João')
    });
  });