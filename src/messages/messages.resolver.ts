import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class MessageResolver {
    messages = [
        { id:0, description: 'The seed message'},
    ];

    @Query('messages')
    getMessages():any {
        return this.messages;
    }

    @Mutation()
    createMessage(@Args('description') description: string):any {
        const msg = { id: this.messages.length + 1, description: description }
        this.messages.push(msg);
        return msg;
    }

    updateMessage(@Args('description') description: string):any {
        const msg = { id: this.messages.length + 1, description: description }
        this.messages.push(msg);
        return msg;
    }
}