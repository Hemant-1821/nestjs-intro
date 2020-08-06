import { Module } from '@nestjs/common';
import {MessageResolver} from './messages.resolver';

@Module({
    providers:[MessageResolver],
    exports: [MessageResolver],
})
export class MessagesModule {}
