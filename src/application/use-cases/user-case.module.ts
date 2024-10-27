import { Module } from '@nestjs/common';
import { AmazonExternalUseCase } from './external/amazon-external';
import { AmazonModule } from '@infra/external/amazon.module';

@Module({
  imports: [AmazonModule],
  providers: [AmazonExternalUseCase],
  exports: [AmazonExternalUseCase],
})
export class UseCasesModule {}
