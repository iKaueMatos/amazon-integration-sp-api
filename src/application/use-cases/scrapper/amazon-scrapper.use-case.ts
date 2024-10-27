import { Injectable } from '@nestjs/common';
import { Either, left, right } from '@core/logic/Either';
import { AmazonScrapperService } from '@infra/amazon/service/amazon-scrapper.service';
import { AmazonScrapperErrors } from './errors/amazon-scrapper.use-case';
import { IProduct } from 'amazon-product-scrapper';

@Injectable()
export class AmazonScrapperUseCase {
  constructor(private readonly amazonScrapperService: AmazonScrapperService) {}

  async execute(query: string): Promise<Either<Error, IProduct | null>> {
    try {
      const result = await this.amazonScrapperService.scrapper(query);
      return right(result);
    } catch (error) {
      return left(new AmazonScrapperErrors("Ocorreu um erro ao tentar fazer capturar o produto!", `${error}`));
    }
  }
}
