import * as React from 'react';

export const EventPreview = () =>
    <div className='EventPreview'>
        <header className='EventPreview__header'>
            <div className='EventPreview__thumbnail'>
                <div className='EventPreview__thumbnail__calendar'>
                    <div>Saturday</div>
                    <div>8th Mar</div>
                </div>
            </div>
        </header>
        <div className='EventPreview__body'>
            <h4 className='EventPreview__title'>Event Title</h4>
            <p className='EventPreview__description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dicta dolores enim et facere fugiat in maxime modi, molestiae perspiciatis possimus ratione, repellat repellendus soluta veniam vero voluptas voluptatem voluptatum?
            </p>
        </div>
    </div>