export interface IProduct {
    productId: number;
    productName: string;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
}
