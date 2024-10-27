import { Injectable } from '@nestjs/common';
import { Either, left, right } from '@core/logic/Either';
import { AmazonService } from '@infra/external/service/amazon-sp.service';
import { CatalogItemsQuery } from '@infra/external/interfaces/amazon-sp/catalog-items-query.interface';
import { GetItemOffersResponse } from 'amazon-sp-api/lib/typings/operations/productPricing';
import { RelatedItemsResponse } from '@infra/external/interfaces/amazon-sp/related-items.interface';
import { GetCatalogItemResponse, ListCatalogCategoriesResponse } from 'amazon-sp-api/lib/typings/operations/catalogItems';
import { SellerOffersResponse } from '@infra/external/interfaces/amazon-sp/sellers-offers.interface';
import { AmazonExternalErrors } from './errors/amazon-external.errors';

@Injectable()
export class AmazonExternalUseCase {
  constructor(private readonly amazonService: AmazonService) {}

  async searchCatalogItems(query: CatalogItemsQuery): Promise<Either<Error, CatalogItemsResponse>> {
    try {
      const result = await this.amazonService.searchCatalogItems(query);
      return right(result);
    } catch (error) {
      return left(new AmazonExternalErrors('Falha ao consultar itens do catálogo'));
    }
  }

  async getCatalogItem(asin: string): Promise<Either<Error, CatalogItemsResponse>> {
    try {
      const result: GetCatalogItemResponse = await this.amazonService.getCatalogItem(asin);
  
      const catalogItemsResponse: CatalogItemsResponse = {
        Items: [result.payload],
      };
  
      return right(catalogItemsResponse);
    } catch (error) {
      return left(new AmazonExternalErrors('Falha ao consultar item'));
    }
  }
  
  async getItemOffers(asin: string): Promise<Either<Error, GetItemOffersResponse>> {
    try {
      const result = await this.amazonService.getItemOffers(asin);
      return right(result);
    } catch (error) {
      return left(new AmazonExternalErrors('Falha ao consultar ofertas do item'));
    }
  }

  async getRelatedItems(asin: string): Promise<Either<Error, RelatedItemsResponse>> {
    try {
      const result = await this.amazonService.getRelatedItems(asin);
      return right(result);
    } catch (error) {
      return left(new AmazonExternalErrors('Falha ao consultar itens relacionados'));
    }
  }

  async listCategories(): Promise<Either<Error, ListCatalogCategoriesResponse>> {
    try {
      const result = await this.amazonService.listCategories();
      return right(result);
    } catch (error) {
      return left(new AmazonExternalErrors('Falha ao listar categorias'));
    }
  }

  async getSellerOffers(sellerId: string): Promise<Either<Error, SellerOffersResponse>> {
    try {
      const result = await this.amazonService.getSellerOffers(sellerId);
      return right(result);
    } catch (error) {
      return left(new AmazonExternalErrors('Falha ao consultar ofertas do vendedor'));
    }
  }
}
