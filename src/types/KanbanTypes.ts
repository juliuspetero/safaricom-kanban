//Application type definitions
export interface Task {
    id: string;
    title: string;
    columnId: string;
};

export interface Column {
    id: string;
    title: string;
    tasks: Task[];
};

export interface Datasets{
    columns: Column[];
    tasks: Task[];
}
