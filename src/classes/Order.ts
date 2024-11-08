import { CustomerOrder } from "../interface/Customer-protocol";
import { MessagingProtocol } from "../interface/MessagingProtocol";
import { OrderStatus } from "../interface/OrderStatus";
import { PersistencyProtocol } from "../interface/PersistencyProtocol";
import { ShoppingCartProtocol } from "../interface/ShoppingCartProtocol";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log("Carrinho vazio");
      return;
    }
    this._orderStatus = "closed";
    this.messaging.sendMessage(
      `Seu pedido de ${this.shoppingCart.totalWithDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.shoppingCart.clear();
    console.log(`O cliente é: ${this.customer.getName()} ${this.customer.getIDN()}`)
  }
}
