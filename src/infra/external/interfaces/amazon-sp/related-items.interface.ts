import { Price } from "./sellers-offers.interface";

export interface RelatedItemsResponse {
    relatedItems: RelatedItem[];
  }
  
  export interface RelatedItem {
    asin: string;
    title: string;
    imageUrl: string;
    category: string;
    price: Price;
  }
  