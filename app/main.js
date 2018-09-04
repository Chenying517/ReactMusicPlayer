import React from 'react';
import { render } from 'react-dom';
import Header from './page/header';
import Progress from './page/progress'

render(
    <div>
        <Header />
        <Progress progress={'1s'}/>
    </div>,
    document.getElementById('root')
);


