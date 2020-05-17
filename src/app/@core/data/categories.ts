export interface ICategory {
    category_id: number;
    category_name: string;
    status: string;
    remark: string;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
}
