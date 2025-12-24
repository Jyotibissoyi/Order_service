import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>,
    ) { }

    create(data) {
        return this.userModel.create(data);
    }

    findAll() {
        return this.userModel.find();
    }

    async findByEmail(email: string) {
        return this.userModel.findOne({ email });
    }
}
