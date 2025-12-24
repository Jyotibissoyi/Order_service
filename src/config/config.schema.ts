import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConfigDocument = FormConfig & Document;

@Schema({ timestamps: true })
export class FormConfig {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Object, required: true })
  data: any;
}

export const ConfigSchema = SchemaFactory.createForClass(FormConfig);
    