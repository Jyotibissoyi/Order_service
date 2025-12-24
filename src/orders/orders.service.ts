import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Order.name)
        private orderModel: Model<OrderDocument>,
    ) { }

    async create(data: any) {
        let total = 0;
        const finalProducts: any = [];

        for (const item of data.products) {
            const res = await axios.get(`http://localhost:3020/products/${item.productId}`);
            const product = res.data;

            if (!product || product.stock < item.quantity) {
                throw new BadRequestException('Invalid or out-of-stock product');
            }

            total += product.price * item.quantity;

            finalProducts.push({
                productId: product._id,
                name: product.name,
                price: product.price,
                quantity: item.quantity,
            });
        }

        return this.orderModel.create({
            customerName: data.customerName,
            email: data.email,
            products: finalProducts,
            totalAmount: total,
        });
    }

    findAll() {
        return this.orderModel.find();
    }
}
