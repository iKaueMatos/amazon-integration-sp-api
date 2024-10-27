import { Injectable } from '@nestjs/common';
import { AmazonProduct, IProduct } from 'amazon-product-scrapper';

@Injectable()
export class AmazonScrapperService {
  constructor(private readonly amazonScrapper: AmazonProduct) {}

  async scrapper(url: string): Promise<IProduct | null> {
    try {
      const product: IProduct | null = await this.amazonScrapper.getProduct(url, "pt-br");
      
      if (!product) {
        return null;
      }

      return product;
    } catch (error) {
      throw new Error(`Ocorreu um erro interno no servidor: ${error}`);
    }
  }
}
