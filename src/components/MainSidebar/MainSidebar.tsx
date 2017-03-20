import * as React from 'react';
import {MainConfig} from '../MainConfig/MainConfig';

export const MainSidebar = () =>
    <section className='MainSidebar'>
        <nav className='MainSidebar__nav'>
            <div className='MainSidebar__linkWrapper MainSidebar__linkWrapper--selected'>
                <a href="" className='MainSidebar__link'>Featured</a>
            </div>
            <div className='MainSidebar__linkWrapper'>
                <a href="" className='MainSidebar__link'>Soonest</a>
            </div>
        </nav>
        <MainConfig/>
    </section>