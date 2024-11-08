import { Messaging } from "./services/Messaging";
import { Order } from "./classes/Order";
import { Persistency } from "./services/Persistency";
import { Product } from "./classes/Product";
import { ShoppingCart } from "./classes/ShoppingCart";
import { FiftyPercentDiscount } from "./classes/Discount";
import { IndividualCustomer } from "./classes/Customer";

// const noDiscount = new NoDiscount()
const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  "João",
  "122.195.655-12",
  "Henrique",
);
const order = new Order(shoppingCart, messaging, persistency, individualCustomer);
console.log(order.orderStatus);
shoppingCart.addItem(new Product("Camiseta", 66.99));
shoppingCart.addItem(new Product("Caneta", 4.99));
shoppingCart.addItem(new Product("Caderno", 78.99));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(shoppingCart.items);
console.log(order.orderStatus);
