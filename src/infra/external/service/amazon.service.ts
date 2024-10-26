import { Injectable } from '@nestjs/common';
import { SellingPartner } from 'amazon-sp-api';
import { Config } from 'amazon-sp-api/lib/typings/baseTypes';
import { CatalogItemsQuery } from '../interfaces/catalog-items-query.interface';

@Injectable()
export class AmazonService {
  private sellingPartner: SellingPartner;

  constructor(options: Config) {
    this.sellingPartner = new SellingPartner(options);
  }

  async consultCatalogItems(query: CatalogItemsQuery): Promise<CatalogItemsResponse> {
    try {
        const result: CatalogItemsResponse = await this.sellingPartner.callAPI({
          operation: 'getCatalogItems',
          query,
        });
        return result;
      } catch (error) {
        console.error('Erro ao buscar dados de produtos:', error);
        throw error;
      }
  }
}
