import { CartItem } from "../interface/CartItem";

export class Product implements CartItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
