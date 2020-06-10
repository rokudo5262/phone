import { IOrder } from './orders';

export interface IStaff {
    staffId: number;
    managerId: number;
    storeId: number;
    emai: string;
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
    zipCode: string;
    dateOfBirth: Date;
    identityCard: string;
    identityCardPlace: string;
    identityCardDate: Date;
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
