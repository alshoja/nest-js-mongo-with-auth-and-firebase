import { Controller, Get } from '@nestjs/common';

import { FireBaseService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly fireBaseService: FireBaseService) {}

  @Get()
  sendNotification(token, payload) {
    return this.fireBaseService.sendPushNotification(token, payload);
  }
}
