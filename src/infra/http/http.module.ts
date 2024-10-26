import { Module } from '@nestjs/common';
import { UseCasesModule } from '@application/use-cases/user-case.module';

@Module({
  imports: [
    UseCasesModule,
  ],
  providers: [],
})
export class HttpModule {}
