export class CreateOrderDto {
  customerName: string;
  email: string;
  products: {
    productId: string;
    quantity: number;
  }[];
}
