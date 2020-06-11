import { IOrderItem } from './orderitems';

export interface IOrder {
    orderId: number;
    customerId: number;
    staffId: number;
    status: string;
    remark: string;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    orderItems: IOrderItem[];
}
