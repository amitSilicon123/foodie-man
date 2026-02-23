import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from 'src/common/decorators/public.decorator';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Public()
  @Get('hello')
  getHello() {
   // return this.appService.getHello();
    return {
      status: 'ok',
      service: 'Hire-Foody API asdfsadfasdfsadfsdfsdfdfsdf',
      timestamp: new Date(),
    };
  }

  @Public()
  @Get('ping')
  ping() {
  }
}
