import { Injectable } from '@nestjs/common';
import { SellingPartner } from 'amazon-sp-api';
import { Config } from 'amazon-sp-api/lib/typings/baseTypes';
import { CatalogItemsQuery } from '../interfaces/amazon-sp/catalog-items-query.interface';
import { GetCatalogItemResponse, ListCatalogCategoriesResponse } from 'amazon-sp-api/lib/typings/operations/catalogItems';
import { GetItemOffersResponse } from 'amazon-sp-api/lib/typings/operations/productPricing';
import { RelatedItemsResponse } from '../interfaces/amazon-sp/related-items.interface';
import { SellerOffersResponse } from '../interfaces/amazon-sp/sellers-offers.interface';

@Injectable()
export class AmazonService {
  private sellingPartner: SellingPartner;

  constructor(options: Config) {
    this.sellingPartner = new SellingPartner(options);
  }

  async searchCatalogItems(query: CatalogItemsQuery): Promise<CatalogItemsResponse> {
    return await this.callAmazonAPI('searchCatalogItems', query);
  }

  async getCatalogItem(asin: string): Promise<GetCatalogItemResponse> {
    return await this.callAmazonAPI('getCatalogItem', { asin });
  }

  async getItemOffers(asin: string): Promise<GetItemOffersResponse> {
    return await this.callAmazonAPI('getItemOffers', { asin });
  }

  async getRelatedItems(asin: string): Promise<RelatedItemsResponse> {
    return await this.callAmazonAPI('getRelatedItems', { asin });
  }

  async listCategories(): Promise<ListCatalogCategoriesResponse> {
    return await this.callAmazonAPI('listCatalogCategories', {});
  }

  async getSellerOffers(sellerId: string): Promise<SellerOffersResponse> {
    return await this.callAmazonAPI('getSellerOffers', { sellerId });
  }

  private async callAmazonAPI(operation: string, query: any, endpoint?: string): Promise<any> {
    try {
      const result = await this.sellingPartner.callAPI({
        operation,
        query,
        endpoint,
      });
      return result;
    } catch (error) {
      console.error(`Erro ao chamar a API: ${operation}`, error);
      throw error;
    }
  }
}
