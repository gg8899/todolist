import React from 'react';
import { FooterProps } from '@/types/index';

import './index.less';

const Footer: React.FC<FooterProps> = ({ clearComplete, toDoObj }) => (<div className='wrapper'>
    <div>代办总事项: {toDoObj.left}</div>
    <div>当前已完成: {toDoObj.complete}</div>
    <a className='clear' onClick={clearComplete}>清除所有已完成</a>
</div>);

export default Footer;