import { Injectable } from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nRequestScopeService) {}
  async getHello(): Promise<string> {
    const hello: string = await this.i18n.translate('test.HELLO_WORLD');
    return hello;
  }
}
