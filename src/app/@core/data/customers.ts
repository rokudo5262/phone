import { IOrder } from './orders';

export interface ICustomer {
    customerId: number;
    email: string;
    password: string;
    firstname: string;
    middlename: string;
    lastname: string;
    gender: string;
    phone: string;
    address: string;
    street: string;
    ward: string;
    district: string;
    city: string;
    country: string;
    zip_code: string;
    dateOfBirth?: Date;
    identityCard: string;
    identityCardPlace: string;
    identityCardDate?: Date;
    identityCardAddress: string;
    status: string;
    remark: string;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    orders: IOrder[];
}
