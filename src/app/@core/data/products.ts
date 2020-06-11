export interface IProduct {
    productId: number;
    productName: string;
    brandId: string;
    categoryId: string;
    modelYear: string;
    price: string;
    description: string;
    status: string;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
}
