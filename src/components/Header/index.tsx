import React, { useState } from 'react';
import { Card, Input, message, List, Checkbox } from 'antd';

import { ItemType, HeaderProps } from '@/types/index'



const Header: React.FC<HeaderProps> = ({ getNewData }) => {
    const [inputValue, setInputValue] = useState('');
    const getNewList = (e: any) => {
        setInputValue(e.target.value)
    }
    const addToDoList = (e: any) => {
        console.log(e.key, 'e.keyCode');

        if (e.key !== 'Enter') return
        if (inputValue.trim() === '') {
            return message.warning('请输入代办事项！');
        }
        const todoObj: ItemType = {
            id: Math.floor(10000000 * Math.random()),
            title: inputValue,
            check: false
        }
        getNewData(todoObj)
        setInputValue('')
    }

    return (
        <>
            <Input value={inputValue} placeholder="create a new todo" onChange={getNewList} onKeyDown={addToDoList} />
        </>
    )
};

export default Header;