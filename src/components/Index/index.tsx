import React, { useEffect, useMemo, useState } from 'react';
import { Tabs } from 'antd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TodoList from '@/components/TodoList';
import DoneList from '@/components/DoneList';
import TodoListService from '@/utils/index';
import { ItemType, ToDoObjType, TodoListData } from '@/types/index';
import type { TabsProps } from 'antd';

const Index: React.FC = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '代办事项',
            children: <TodoList />,
        },
        {
            key: '2',
            label: '已完成事項',
            children: <DoneList />,
        },
    ];
    const onChange = () => {

    }
    const TabsComp: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

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
        const data: ItemType[] = TodoListService.getTodos();
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
            <Header getNewData={addToDoList} />
            <TabsComp />
            <Footer toDoObj={toDoObj} clearComplete={clearComplete} />
        </>
    )
};

export default Index;