import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { WhatsappRequest } from './whatsapp.request';
import { WhatsappService } from './whatsapp.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly whatsappService: WhatsappService
  ) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }


  @Post('/whatsapp')
  public sendWhatsappMessage(
    @Body() data: WhatsappRequest
  ){
    return this.whatsappService.sendTextMessage(
      data.to,
      data.message
    );
  }
}
