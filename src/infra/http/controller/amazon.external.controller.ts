import { AmazonExternalUseCase } from "@application/use-cases/external/amazon-external";
import { CatalogItemsQuery } from "@infra/amazon/interfaces/amazon-sp/catalog-items-query.interface";
import { Controller, Get, Query, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';

@ApiTags('Amazon') // Define a tag para agrupar os endpoints na documentação
@Controller('amazon')
export class AmazonExternalController {
  constructor(private readonly amazonExternalUseCase: AmazonExternalUseCase) {}

  @Get('catalog-items')
  @ApiOperation({ summary: 'Buscar itens do catálogo' })
  @ApiQuery({ name: 'query', required: false, description: 'Parâmetros de consulta para busca de itens' })
  @ApiResponse({ status: 200, description: 'Lista de itens do catálogo', isArray: true })
  async getCatalogItems(@Query() query: CatalogItemsQuery) {
    return await this.amazonExternalUseCase.searchCatalogItems(query);
  }

  @Get('catalog-item/:asin')
  @ApiOperation({ summary: 'Buscar item do catálogo por ASIN' })
  @ApiParam({ name: 'asin', description: 'Código ASIN do item' })
  @ApiResponse({ status: 200, description: 'Detalhes do item do catálogo' })
  async getCatalogItem(@Param('asin') asin: string) {
    return await this.amazonExternalUseCase.getCatalogItem(asin);
  }

  @Get('item-offers/:asin')
  @ApiOperation({ summary: 'Buscar ofertas de um item por ASIN' })
  @ApiParam({ name: 'asin', description: 'Código ASIN do item' })
  @ApiResponse({ status: 200, description: 'Ofertas do item' })
  async getItemOffers(@Param('asin') asin: string) {
    return await this.amazonExternalUseCase.getItemOffers(asin);
  }

  @Get('related-items/:asin')
  @ApiOperation({ summary: 'Buscar itens relacionados por ASIN' })
  @ApiParam({ name: 'asin', description: 'Código ASIN do item' })
  @ApiResponse({ status: 200, description: 'Itens relacionados' })
  async getRelatedItems(@Param('asin') asin: string) {
    return await this.amazonExternalUseCase.getRelatedItems(asin);
  }

  @Get('categories')
  @ApiOperation({ summary: 'Listar categorias disponíveis' })
  @ApiResponse({ status: 200, description: 'Lista de categorias', isArray: true })
  async listCategories() {
    return await this.amazonExternalUseCase.listCategories();
  }

  @Get('seller-offers/:sellerId')
  @ApiOperation({ summary: 'Buscar ofertas de um vendedor por ID' })
  @ApiParam({ name: 'sellerId', description: 'ID do vendedor' })
  @ApiResponse({ status: 200, description: 'Ofertas do vendedor' })
  async getSellerOffers(@Param('sellerId') sellerId: string) {
    return await this.amazonExternalUseCase.getSellerOffers(sellerId);
  }
}
