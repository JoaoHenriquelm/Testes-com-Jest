//* Testando o Customer
import { EnterpriseCustomer, IndividualCustomer } from "./Customer";

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};
const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe("IndividualCustomer", () => {
  it("should have firstName, lastName and cpf", () => {
    //* Se os dados são públicos testamos se eles existem, senão testamos os metódos que usam eles
    const sut = createIndividualCustomer("João", "256.569.789-18", "Henrique");
    expect(sut).toHaveProperty("firstName", "João");
    expect(sut).toHaveProperty("lastName", "Henrique");
    expect(sut).toHaveProperty("cpf", "256.569.789-18");
  });

  it("should have methods to get name and idn for individual customer", () => {
    const sut = createIndividualCustomer("João", "256.569.789-18", "Henrique");
    expect(sut.getName()).toBe("João Henrique");
    expect(sut.getIDN()).toBe("256.569.789-18");
  });
});

describe("EnterpriseCustomer", () => {
  it("should have name and cnpj", () => {
    const sut = createEnterpriseCustomer("Udemy", "25854-5485-55458");
    expect(sut).toHaveProperty("name", "Udemy");
    expect(sut).toHaveProperty("cnpj", "25854-5485-55458");
  });

  it("should have methods to get name and idn for enterprise customers", () => {
    const sut = createEnterpriseCustomer("Udemy", "25854-5485-55458");
    expect(sut.getName()).toBe("Udemy");
    expect(sut.getIDN()).toBe("25854-5485-55458");
  });
});
