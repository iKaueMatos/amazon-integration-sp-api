export interface SellerOffersResponse {
    offers: Offer[];
    pagination: Pagination;
  }
  
  export interface Offer {
    sellerId: string;
    asin: string;
    condition: string;
    price: Price;
    availability: Availability;
    shipping: Shipping;
    isBuyBoxWinner: boolean;
    fulfillmentChannel: string;
  }
  
  export interface Price {
    currency: string;
    amount: number;
  }
  
  export interface Availability {
    quantity: number;
    isPreorder: boolean;
  }
  
  export interface Shipping {
    type: string;
    cost: Price;
  }
  
  export interface Pagination {
    nextToken?: string;
  }
  