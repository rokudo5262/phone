export interface IStaff {
    staffId: number;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
}
