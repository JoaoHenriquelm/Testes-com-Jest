import { CartItem } from "../interface/CartItem";
import { CustomerOrder } from "../interface/Customer-protocol";
import { MessagingProtocol } from "../interface/MessagingProtocol";
import { PersistencyProtocol } from "../interface/PersistencyProtocol";
import { ShoppingCartProtocol } from "../interface/ShoppingCartProtocol";
import { Order } from "./Order";

//* A maioria das coisas do ORDER são feitas por outras classes então vamos mockar a maioria delas, fazendo uma classe simulado somente para ver se o nosso order está fazendo a sua função
class ShoppingCartMock implements ShoppingCartProtocol {
  _items: readonly CartItem[] = [];

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  addItem(): void {}
  removeItem(): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 2;
  }
  clear(): void {}
  isEmpty(): boolean {
    return false;
  }
}

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return "";
  }
  getIDN(): string {
    return "";
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  );
  return { sut, shoppingCartMock, messagingMock, persistencyMock };
};

describe("Order", () => {
  it("should not checkout if cart is empty", () => {
    const { sut, shoppingCartMock } = createSut();
    //* Podemos simular um valor que vai ser retornado
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, "isEmpty")
      .mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe("open");
  });
  it("should checkout if cart is not empty", () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, "isEmpty")
      .mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe("closed");
  });
  it("should send an email to customer", () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest.spyOn(messagingMock, "sendMessage");
    sut.checkout();
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });
  it("should save order", () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, "saveOrder");
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

});
