import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from "../interface/Customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  cpf: string;
  lastName: string;
  // Pessoa física não tem -> cnpj: string;

  constructor(firstName: string, cpf: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.cpf = cpf
  }

  getName(): string {
      return this.firstName + " " + this.lastName
  }

  getIDN(): string {
      return this.cpf
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  cnpj: string;
  name: string;
  // Pessoa jurídica não tem -> cpf: string;
  constructor(name: string, cnpj: string) {
    this.name = name
    this.cnpj = cnpj
  }

  getName(): string {
      return this.name
  }

  getIDN(): string {
      return this.cnpj
  }
}
