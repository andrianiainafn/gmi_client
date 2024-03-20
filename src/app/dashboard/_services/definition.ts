export interface IRequestStat{
    approved:number
    pending:number
    rejected:number
}
export interface IMaterialStat {
    materialStats:  IMaterialStatItem[];
    materialNumber: number;
}

export interface IMaterialStatItem {
    statName:   string;
    statNumber: number;
}