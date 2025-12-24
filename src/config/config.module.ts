import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { FormConfig, ConfigSchema } from './config.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FormConfig.name, schema: ConfigSchema },
    ]),
  ],
  controllers: [ConfigController],
  providers: [ConfigService],
})
export class ConfigModule {}
