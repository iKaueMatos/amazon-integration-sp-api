interface Price {
    quantity: number;
    amount: number;
    discountPercent: number;
    currency: string;
    basisPrice: number;
}

interface Rating {
    classes: string;
    description: string;
    amount: string;
}

interface Overview {
    table: Array<[string, string]>;
    bullets: string[];
}

interface Details {
    features: string[];
    tables: Array<Array<[string, string]>>;
}

interface Review {
    name: string;
    image: string;
    classes: string;
    title: string;
    content: string;
}

interface Reviews {
    top: Review[];
}

interface Product {
    asin: string;
    image: string;
    images: string[];
    title: string;
    titles: string[];
    link: string;
    price: Price;
    rating: Rating;
    overview: Overview;
    details: Details;
    reviews: Reviews;
}

export interface ProductsResponse {
    products: Product;
}
