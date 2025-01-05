import React, { useEffect, useMemo, useState } from 'react';
import { Card,  List, Checkbox, Button } from 'antd';
import { ItemType, ToDoObjType, TodoListData } from '@/types/index';
import TodoListService from '@/utils/index';


const TodoList: React.FC = () => {
    const [dataList, setDataList] = useState<ItemType[]>([])
    useEffect(() => {
        getAllData()
    }, [])

    const toDoObj: ToDoObjType = useMemo(() => {
        const left = dataList.filter((item: ItemType) => item.check == false).length
        const complete = dataList.filter((item: ItemType) => item.check == true).length
        return { left, complete }
    }, [dataList])

    const getAllData = () => {
        const data: ItemType[] = TodoListService.getTodos().filter((item: ItemType) => item.check == true);
        setDataList(data);
    }

    const addToDoList = (todoObj: ItemType) => {
        TodoListService.addTodo(todoObj);
        getAllData()

    }

    const changeStatus = (id: number) => {
        TodoListService.toggleTodo(id)
        getAllData()
    }
    const delData = (id: number) => {
        TodoListService.removeTodo(id)
        getAllData()
    }
    const clearComplete = () => {
        TodoListService.removeAllDone()
        getAllData()
    }

    return (
        <>
            <List rowKey="id"
                itemLayout="horizontal"
                dataSource={dataList}
                renderItem={(item, index) => (
                    <List.Item extra={<Button onClick={() => delData(item.id)} type='link'>删除</Button>}>
                        <List.Item.Meta
                            avatar={<Checkbox checked={item.check} onChange={() => changeStatus(item.id)} />}
                            description={item.title}
                        />
                    </List.Item>
                )}
            />
        </>
    )
};

export default TodoList;