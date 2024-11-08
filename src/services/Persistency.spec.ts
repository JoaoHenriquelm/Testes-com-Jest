//* Aqui criamos nossos testes, podemos criar um teste com as funções it ou teste, ambas fazem a mesma coisa

//- Podemos criar grupo de testes, podemos usar a descrição do que estamos testando e nos testes oque deveria retornar ou fazer
// describe('Testando algo', () => {
//     it('descrição do teste (it) -> should return one', () => {
//         const number = 1;
//         expect(number).toBe(1)
//     })
// })
// describe('Testando outro algo', () => {
//     test('descrição do teste (teste) -> should return João', () => {
//         const nome = 'João';
//         expect(nome).toBe('João')
//     })
// })

//* Testando o persistency
import { Persistency } from "./Persistency";

describe("Persistency", () => {
  afterEach(() => jest.clearAllMocks());
  it("should return undefined", () => {
    // A classe principal, ou seja, a que está sendo testada é chamada de sut (system under test)
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  //- Podemos colocar dentro da nossa classe um espião, que irá verificar se ela está fazendo e chamando as coisas da maneira como queremos
  it("should call console.log once", () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, "log");
    //* Ao chamar o meu saveOrder vai contabilizar um no espião do console.log o que fará meu teste ser um sucesso, porém se eu chamar um outro teste com console.log a contagem de vezes que foi chamado vai continuar aumentando, por isso precisamos falar pro jest no cabeçalho que após cada teste ele vai limpar o objeto console.
    //- Esses objetos de teste são chamados de mocks
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  //- Vamos agora verificar se esse console.log tem sua saída correta
  it('should call console.log with "Pedido salvo com sucesso"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, "log");
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});

//* Podemos aplicar o TDD e fazer os testes antes de fazer o código isso evita futuros problemas e cria códigos já testados e muitas vezes a prova de erros. Aqui identificamos um problema, a nossa saída é um hard code, o que aumenta o acoplamento da minha classe