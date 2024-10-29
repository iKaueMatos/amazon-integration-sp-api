import { Entity } from "@core/domain/Entity";

export type ProductProps = {
    asin: string;
    image: string;
    images: string[];
    title: string;
    link: string;
    price: {
        quantity: number | null;
        currency: string | null;
        discountPercent?: number;
    };
    details: string;
};

export class Product extends Entity<ProductProps> {
    constructor(props: ProductProps) {
        super(props);
    }
}
