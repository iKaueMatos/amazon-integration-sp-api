import { Module } from '@nestjs/common';
import { ExcelReadService } from './read/excel-read.service';
import { ExcelWriteService } from './write/excel-write.service';

@Module({
  imports: [],
  providers: [
    ExcelReadService,
    ExcelWriteService
  ],
  exports: [
    ExcelReadService,
    ExcelWriteService
  ],
})
export class ExcelModule {}
