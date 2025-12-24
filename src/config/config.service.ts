import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormConfig, ConfigDocument } from './config.schema';

@Injectable()
export class ConfigService {
  constructor(
    @InjectModel(FormConfig.name)
    private configModel: Model<ConfigDocument>,
  ) {}

  async saveConfig(name: string, data: any) {
    return this.configModel.findOneAndUpdate(
      { name },
      { data },
      { upsert: true, new: true },
    );
  }

  async getConfig(name: string) {
    return this.configModel.findOne({ name });
  }
}
