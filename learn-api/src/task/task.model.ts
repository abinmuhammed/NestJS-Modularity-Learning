export interface Task{
    id:string,
    title:string,
    description:string,
    status:Taskstatus
}

export enum Taskstatus {
    OPEN ='OPEN',
    IN_POGRESS='IN_PROGRESS',
    DONE="DONE"
}