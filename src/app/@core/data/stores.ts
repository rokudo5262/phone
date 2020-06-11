export interface IStore {
    storeId: number;
    storeName: string;
    phone: string;
    address: string;
    street: string;
    ward: string;
    district: string;
    city: string;
    country: string;
    zipCode: string;
    status: string;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
}
