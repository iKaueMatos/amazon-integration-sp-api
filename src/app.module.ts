import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { InfraModule } from '@infra/infra.module';
import { LoggerService } from '@infra/logger/logger.service';

@Module({
  imports: [ConfigModule.forRoot(), InfraModule],
  providers: [LoggerService]
})
export class AppModule {}
