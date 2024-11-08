
// export interface CustomerProtocol {
//     firstName: string;
//     lastName: string;
//     cnpj: string;
//     cpf: string;
// }

export interface CustomerOrder {
    getName(): string;
    getIDN(): string;
}

export interface IndividualCustomerProtocol {
    firstName: string;
    lastName: string;
    cpf: string;
}
export interface EnterpriseCustomerProtocol {
    name: string;
    cnpj: string;
}
