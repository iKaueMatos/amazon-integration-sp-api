import { Injectable } from '@nestjs/common';
import { Either, left, right } from '@core/logic/Either';
import { AmazonScrapper } from '@infra/external/service/amazon-scrapper.service';
import { AmazonScrapperErrors } from './errors/amazon-scrapper';
import { IProduct } from 'amazon-product-scrapper';

@Injectable()
export class AmazonExternalUseCase {
  constructor(private readonly amazonScrapperService: AmazonScrapper) {}

  async searchCatalogItems(query: string): Promise<Either<Error, IProduct | null>> {
    try {
      const result = await this.amazonScrapperService.scrapper(query);
      return right(result);
    } catch (error) {
      return left(new AmazonScrapperErrors("Ocorreu um erro ao tentar fazer capturar o produto!", `${error}`));
    }
  }
}
