import { Module } from '@nestjs/common'; 
import dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './config/config.module';
dotenv.config();

const DB_URL: any   = process.env.DB_URL;

@Module({
  imports: [
    MongooseModule.forRoot(
      DB_URL,
    ),
    OrdersModule,
    UsersModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
