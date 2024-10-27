import { AmazonExternalUseCase } from "@application/use-cases/external/amazon-external";
import { CatalogItemsQuery } from "@infra/external/interfaces/amazon-sp/catalog-items-query.interface";
import { Controller, Get, Query, Param } from "@nestjs/common";

@Controller('amazon')
export class AmazonExternalController {
  constructor(private readonly amazonExternalUseCase: AmazonExternalUseCase) {}

  @Get('catalog-items')
  async getCatalogItems(@Query() query: CatalogItemsQuery) {
    return await this.amazonExternalUseCase.searchCatalogItems(query);
  }

  @Get('catalog-item/:asin')
  async getCatalogItem(@Param('asin') asin: string) {
    return await this.amazonExternalUseCase.getCatalogItem(asin);
  }

  @Get('item-offers/:asin')
  async getItemOffers(@Param('asin') asin: string) {
    return await this.amazonExternalUseCase.getItemOffers(asin);
  }

  @Get('related-items/:asin')
  async getRelatedItems(@Param('asin') asin: string) {
    return await this.amazonExternalUseCase.getRelatedItems(asin);
  }

  @Get('categories')
  async listCategories() {
    return await this.amazonExternalUseCase.listCategories();
  }

  @Get('seller-offers/:sellerId')
  async getSellerOffers(@Param('sellerId') sellerId: string) {
    return await this.amazonExternalUseCase.getSellerOffers(sellerId);
  }
}
