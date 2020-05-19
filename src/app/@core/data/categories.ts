export interface ICategory {
    categoryId: number;
    categoryName: string;
    status: string;
    remark: string;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
}
