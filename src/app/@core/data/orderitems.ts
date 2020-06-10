export interface IOrderItem {
    itemId: number;
    orderId: number;
    productId: number;
    quantity: number;
    listPrice: number;
    discount: number;
    deleted: boolean;
    status: string;
    remark: string;
    createdBy: string;
    createdDateTime: Date;
    lastUpdatedBy: string;
    lastUpdatedDateTime: Date;
}