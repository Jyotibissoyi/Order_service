import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Post()
  save(@Body() body) {
    return this.configService.saveConfig(body.name, body.data);
  }

  @Get()
  get(@Query('name') name: string) {
    return this.configService.getConfig(name);
  }
}
