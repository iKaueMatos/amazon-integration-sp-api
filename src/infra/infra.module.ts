import { Module } from '@nestjs/common';
import { HttpModule } from '@infra/http/http.module';
import { LoggerModule } from '@infra/logger/logger.module';
import { AmazonModule } from './external/amazon.module';

@Module({
  imports: [
    HttpModule,
    LoggerModule,
    AmazonModule
  ],
  providers: [],
  exports: [],
})
export class InfraModule {}
