import { Module } from '@nestjs/common';

import { HttpModule } from '@infra/http/http.module';
import { LoggerModule } from '@infra/logger/logger.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AmazonService } from './external/service/amazon.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    LoggerModule,
  ],
  providers: [
    {
      provide: AmazonService,
      useFactory: (configService: ConfigService) => {
        return new AmazonService({
          region: configService.get<string>('AMAZON_REGION') as "na" || "fe" || "eu",
          refresh_token: configService.get<string>('AMAZON_REFRESH_TOKEN'),
          access_token: configService.get<string>(''),
          options: {
            auto_request_tokens: true,
            // debug_log: true
            use_sandbox: true,
            user_agent: 'amazon-sp-api/(Language=Node.js;/; Platform=/)',
          }
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [AmazonService],
})
export class InfraModule {}
