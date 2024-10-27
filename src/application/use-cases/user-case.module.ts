import { Module } from '@nestjs/common';
import { AmazonExternalUseCase } from './external/amazon-external';
import { AmazonModule } from '@infra/amazon/amazon.module';
import { AmazonScrapperUseCase } from './scrapper/amazon-scrapper.use-case';

@Module({
  imports: [AmazonModule],
  providers: [AmazonExternalUseCase, AmazonScrapperUseCase],
  exports: [AmazonExternalUseCase, AmazonScrapperUseCase],
})
export class UseCasesModule {}
