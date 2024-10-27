import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AmazonService } from './service/amazon-sp.service';
import { AmazonScrapper } from './service/amazon-scrapper.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [
    {
      provide: AmazonService,
      useFactory: (configService: ConfigService) => {
        const clientId = configService.get<string>('SELLING_PARTNER_APP_CLIENT_ID');
        const clientSecret = configService.get<string>('SELLING_PARTNER_APP_CLIENT_SECRET');
        const region = configService.get<string>('AMAZON_REGION') as "na" || "fe" || "eu";

        if (!clientId || !clientSecret) {
          throw new Error('Amazon SP API credentials are missing');
        }

        return new AmazonService({
          region,
          credentials:{
            SELLING_PARTNER_APP_CLIENT_ID: clientId,
            SELLING_PARTNER_APP_CLIENT_SECRET: clientSecret
          },
          options: {
            only_grantless_operations: true,
            auto_request_tokens: true,
            use_sandbox: true,
            user_agent: 'amazon-sp-api/(Language=Node.js;/; Platform=/)',
          }
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [AmazonService, AmazonScrapper],
})
export class AmazonModule {}
