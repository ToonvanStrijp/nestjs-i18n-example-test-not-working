import { Injectable } from '@nestjs/common';
import { I18nLang, I18nService } from 'nestjs-i18n';

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}
  async getHello(lang: string): Promise<string> {
    const hello: string = await this.i18n.translate('test.HELLO_WORLD', {lang});
    return hello;
  }
}
