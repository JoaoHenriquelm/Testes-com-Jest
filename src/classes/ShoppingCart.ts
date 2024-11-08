//* DIP(principio da inversão de dependência) simplificando temos que ter abstrações para implementar classes uma dentro da outras, para assim ser conhecido dentro de um módulo de alto nível(classe que usa outras classes) um módulo de baixo nível(classe que é usada)
//- Devemos depender de abstrações, e por dizer abstrações digo todas as formas delas como types, interfaces ou classes abstratas
//- O uso abstrações nos deixam utilizar nas classes os objetos que possuam a mesma forma que a interface que esperamos nela
//- Então vamos criar uma interface para cada parâmetro do construtor que está dependendo de classes concretas
//- NÃO DEPENDA DE CLASSES CONCRETAS(IMPLEMENTAÇÕES), MAS SIM DE ABSTRAÇÕES.

import { CartItem } from "../interface/CartItem";
import { ShoppingCartProtocol } from "../interface/ShoppingCartProtocol";
import { Discount } from "./Discount";

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return Number(
      this._items.reduce((total, valor) => total + valor.price, 0).toFixed(2),
    );
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total())
  }

  clear(): void {
    console.log("Carrinho limpo");
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
