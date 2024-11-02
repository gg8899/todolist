export type ItemType = {
    id: number,
    title: string,
    check: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export type TodoListData = ItemType[];


export type ToDoObjType = {
    left: number,
    complete: number,
}


export interface FooterProps {
    clearComplete: () => void;
    toDoObj: ToDoObjType;
}

export interface HeaderProps {
    getNewData: (todoObj: ItemType) => void;
}