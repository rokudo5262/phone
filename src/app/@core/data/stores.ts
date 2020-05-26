export interface IStore {
    storeId: number;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
}
