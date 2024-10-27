import { Injectable } from '@nestjs/common';
import { AmazonProduct, IProduct } from 'amazon-product-scrapper';
import { ConfigScrapper } from 'src/config/interface/amazon-config-scrapper.interface';

@Injectable()
export class AmazonScrapper {
  private amazonScrapper: AmazonProduct;

  constructor(config: ConfigScrapper) {
    this.amazonScrapper = new AmazonProduct();
  }

  async scrapper(url: string): Promise<IProduct | null> {
    try {
      const product: IProduct | null = await this.amazonScrapper.getProduct(url);
      
      if (!product) {
        return null;
      }

      return product;
    } catch (error) {
       throw new Error(`Ocorreu um erro interno no servidor ${error}`);
    }
  }
}
