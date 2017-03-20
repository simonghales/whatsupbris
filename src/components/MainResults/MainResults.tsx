import * as React from 'react';
import {EventPreview} from '../EventPreview/EventPreview';

export const MainResults = () =>
    <section className='MainResults'>
        <div className='MainResults__events'>
            <EventPreview/>
            <EventPreview/>
            <EventPreview/>
            <EventPreview/>
        </div>
    </section>