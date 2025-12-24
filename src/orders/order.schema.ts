import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  customerName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Array, required: true })
  products: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }[];

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ default: 'CREATED' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
