import { Controller, Get, Query } from "@nestjs/common";
import {AmazonProduct} from "amazon-product-scrapper";

@Controller('amazon')
export class AmazonExtractProductController {
  constructor() {}

  @Get('scrapper')
  async getCatalogItems(
    @Query('url') url: string,
  ) {
    const amazonProduct = new AmazonProduct();
    const products = await amazonProduct.getProduct(url, "pt-br");
    return { products };
  }
}
