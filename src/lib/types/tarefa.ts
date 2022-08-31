export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
}

export type FiltersType = 'Todas' | 'Pendentes' | 'Encerradas'