import React from 'react';
import { FooterProps } from '@/types/index'

import './index.less';


const Footer: React.FC<FooterProps> = ({ clearComplete, toDoObj }) => (<div className='wrapper'>
    <div>item left: {toDoObj.left}</div>
    <div>All Active Complete: {toDoObj.complete}</div>
    <a className='clear' onClick={clearComplete}>ClearComplete</a>
</div>);

export default Footer;