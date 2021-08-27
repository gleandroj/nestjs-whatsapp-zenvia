import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as zenvia from '@zenvia/sdk';

@Injectable()
export class WhatsappService {

    private client: zenvia.Client;
    private whatsappChannel: zenvia.WhatsAppChannel;
    private fromNumber: string;

    constructor(config: ConfigService) {
        this.fromNumber = config.get('ZENVIA_FROM_NUMBER')
        this.client = new zenvia.Client(config.get('ZENVIA_TOKEN'));
        this.whatsappChannel = this.client.getChannel('whatsapp') as zenvia.WhatsAppChannel;
    }

    public async sendTextMessage(to: string, message: string) {
        return await this.whatsappChannel.sendMessage(
            this.fromNumber,
            to,
            new zenvia.TextContent(message)
        );
    }

}