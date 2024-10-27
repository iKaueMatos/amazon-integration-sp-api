import { AmazonScrapperUseCase } from "@application/use-cases/scrapper/amazon-scrapper.use-case";
import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('Amazon')
@Controller('amazon')
export class AmazonExtractProductController {
  constructor(private readonly amazonScrapperUseCase: AmazonScrapperUseCase) {}

  @Get('scrapper')
  @ApiOperation({ summary: 'Extrair produtos de uma URL do Amazon' })
  @ApiQuery({ name: 'url', required: true, description: 'URL do produto Amazon a ser extraído' })
  @ApiResponse({ status: 200, description: 'Lista de produtos extraídos' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async handle(@Query('url') url: string) {
    const products = await this.amazonScrapperUseCase.execute(url);
    return products;
  }
}
