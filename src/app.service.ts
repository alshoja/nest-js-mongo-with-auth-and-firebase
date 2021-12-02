import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FireBaseService {
  async sendPushNotification(fcmToken, notification) {
    return await admin.messaging().sendToDevice(fcmToken, notification);
  }
}
